import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import booking from "../../images/booking.svg";
import OrderNav from "../../Pages/Orders/OrderNav";
import "./Bookings.css";

const Booking = (e) => {
   const { user, error } = useAuth();
   const userName = user.displayName;
   const userEmail = user.email;

   const [orders, setOrders] = useState([]);
   const [bookedInfoBtn, setBookedInfoBtn] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm();

   // getting orders for orders info
   useEffect(() => {
      const url = "https://infinite-mountain-42809.herokuapp.com/orders";
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            // filter orders product for personal order list
            const filteredOrders = data.filter(
               (item) => item.buyer === userName && item.email === userEmail
            );

            setOrders(filteredOrders);
         });
   }, [userName, userEmail]);

   // use reduce to get total price
   let initialValue = 0;
   let bookedPrice = orders.reduce(function (previousValue, currentValue) {
      return previousValue + parseFloat(currentValue.discountPrice);
   }, initialValue);
   console.log(bookedPrice);

   // hook form submit
   const onSubmit = (data) => {
      console.log(data);
      const url = "https://infinite-mountain-42809.herokuapp.com/bookings";
      fetch(url, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("Bookings added successfully");
               setBookedInfoBtn(true);
               reset();
            }
         });
   };

   return (
      <section className="package_wrapper">
         <OrderNav></OrderNav>
         <h1 class="heading book">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span>i</span>
            <span>n</span>
            <span>g</span>
         </h1>
         <article className="row">
            <div className="col-12 col-lg-6">
               <img src={booking} className="img-fluid" alt="" />
            </div>
            {error && <div style={{ color: "red" }}></div>}
            <form
               className="form_login form_box col-12 col-lg-6"
               onSubmit={handleSubmit(onSubmit)}
            >
               {/* register your input into the hook by invoking the "register" function */}
               <input
                  placeholder="Name"
                  type="text"
                  defaultValue={userName}
                  {...register("name", { required: true })}
               />
               {errors.name && (
                  <span className="error"> Please click on your name</span>
               )}
               <input
                  placeholder="Email"
                  type="email"
                  defaultValue={userEmail}
                  readOnly
                  {...register("email", { required: true })}
               />

               {errors.email && (
                  <span className="error"> Please click on email</span>
               )}

               {/* include validation with required or other standard HTML validation rules */}
               <input
                  placeholder="Address"
                  type="text"
                  {...register("address", { required: true })}
               />
               {/* errors will return when field validation fails  */}
               {errors.address && (
                  <span className="error">Address is required</span>
               )}
               <input
                  placeholder="Arrival"
                  type="datetime-local"
                  {...register("date", { required: true })}
               />
               {/* errors will return when field validation fails  */}
               {errors.date && <span className="error">Date is required</span>}

               <input
                  placeholder="Mobile"
                  type="tel"
                  {...register("mobile", { required: true })}
               />
               {/* errors will return when field validation fails  */}
               {errors.mobile && (
                  <span className="error">Mobile is required</span>
               )}

               <input type="submit" value="Mobile" />
            </form>
         </article>

         {bookedInfoBtn && (
            <div className="text-center pt-5">
               <button className="btn_book">See Booked Information</button>
            </div>
         )}
      </section>
   );
};

export default Booking;

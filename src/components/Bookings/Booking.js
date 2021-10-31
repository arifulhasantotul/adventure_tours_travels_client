import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import booking from "../../images/booking.svg";
import pic from "../../images/user.png";
import OrderNav from "../../Pages/Orders/OrderNav";
import SkeletonPackages from "../Skeleton/SkeletonPackages";
import "./Bookings.css";

const Booking = (e) => {
   const { user, error } = useAuth();
   const userName = user.displayName;
   const userEmail = user.email;

   const [orders, setOrders] = useState([]);
   const [bookedInfoBtn, setBookedInfoBtn] = useState(false);
   const [infoLoading, setInfoLoading] = useState(true);
   const [bookedInformation, setBookedInformation] = useState([]);
   const [showBookedDiv, setShowBookedDiv] = useState(false);

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

   // showing booked info in ui
   const handleBookedInfo = (e) => {
      setInfoLoading(true);
      setShowBookedDiv(true);
      const url = "https://infinite-mountain-42809.herokuapp.com/bookings";
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            const filteredBookedInfo = data.filter(
               (item) => item.email === userEmail
            );
            console.log(filteredBookedInfo);
            setBookedInformation(filteredBookedInfo);
         })
         .catch((error) => console.log(error))
         .finally(() => {
            setInfoLoading(false);
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

               <input type="submit" value="Book Now" />
            </form>
         </article>

         {bookedInfoBtn && (
            <div className="text-center py-5">
               <button onClick={handleBookedInfo} className="btn_book">
                  See Booked Information
               </button>
            </div>
         )}
         {showBookedDiv && (
            <h1 class="heading book">
               <span>i</span>
               <span>n</span>
               <span>f</span>
               <span>o</span>
               <span>r</span>
               <span>m</span>
               <span>a</span>
               <span>t</span>
               <span>i</span>
               <span>o</span>
               <span>n</span>
            </h1>
         )}
         {showBookedDiv && (
            <article className="row">
               <div className='className="col-12 col-lg-6"'>
                  {!infoLoading &&
                     bookedInformation.map((info) => (
                        <div
                           key={info._if}
                           class="card mb-3 mx-auto"
                           style={{ maxWidth: "51rem" }}
                        >
                           <div class="row g-0">
                              <div class="col-md-4">
                                 <img
                                    src={user?.photoURL ? user.photoURL : pic}
                                    class="img-fluid rounded-start h-100"
                                    alt="..."
                                 />
                              </div>
                              <div class="col-md-8">
                                 <div class="card-body">
                                    <h4 class="card-title">
                                       {" "}
                                       <ImIcons.ImUserCheck /> {info.name}
                                    </h4>
                                    <h5 class="card-text">
                                       {" "}
                                       <IoIcons.IoIosMailOpen /> {info.email}
                                    </h5>
                                    <h4>
                                       {" "}
                                       <IoIcons.IoMdCart /> {orders.length}
                                    </h4>
                                    <h4>
                                       {" "}
                                       <CgIcons.CgDollar /> {bookedPrice}
                                    </h4>
                                    <h4>
                                       {" "}
                                       <FaIcons.FaMobileAlt /> {info.mobile}
                                    </h4>
                                    <h5 class="card-text">
                                       {" "}
                                       <MdIcons.MdMapsHomeWork />
                                       {info.address}
                                    </h5>
                                    <h5>
                                       {" "}
                                       <IoIcons.IoMdCalendar /> {info.date}
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                  {infoLoading &&
                     [1, 2, 3, 4, 5, 6].map((n) => (
                        <SkeletonPackages key={n} theme="light" />
                     ))}
               </div>
            </article>
         )}
      </section>
   );
};

export default Booking;

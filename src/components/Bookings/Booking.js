import React, { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import booking from "../../images/booking.svg";
import OrderNav from "../../Pages/Orders/OrderNav";
import "./Bookings.css";

const Booking = () => {
   const { user } = useAuth();
   const userName = user.displayName;
   const userEmail = user.email;
   const nameRef = useRef();
   const linkRef = useRef();
   const arrivalRef = useRef();
   const leaveRef = useRef();
   const priceRef = useRef();
   const itemRef = useRef();

   const handleBook = (e) => {
      e.preventDefault();
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
            <form className="form_login col-12 col-lg-6" onSubmit={handleBook}>
               <input
                  type="text"
                  placeholder="Name"
                  ref={nameRef}
                  defaultValue={userName}
                  required
               />
               <input
                  type="text"
                  placeholder="Email"
                  defaultValue={userEmail}
                  ref={linkRef}
                  readOnly
                  required
               />
               <input
                  type="date"
                  placeholder="Arrivals"
                  ref={arrivalRef}
                  required
               />
               <input
                  type="date"
                  placeholder="Leaving"
                  ref={leaveRef}
                  required
               />
               <input
                  type="number"
                  placeholder="Leaving"
                  ref={itemRef}
                  required
               />
               <input
                  type="text"
                  placeholder="Leaving"
                  ref={priceRef}
                  required
               />

               <input type="submit" value="Book Now" />
            </form>
         </article>
      </section>
   );
};

export default Booking;

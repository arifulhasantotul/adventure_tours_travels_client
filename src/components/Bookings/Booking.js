import React, { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import OrderNav from "../../Pages/Orders/OrderNav";

const Booking = () => {
   const { user } = useAuth();
   const userName = user.displayName;
   const userEmail = user.email;
   const nameRef = useRef();
   const linkRef = useRef();
   const arrivalRef = useRef();
   const leaveRef = useRef();

   const handleBook = (e) => {
      e.preventDefault();
   };
   return (
      <section className="package_wrapper">
         <OrderNav></OrderNav>
         <h1 class="heading">
            <span>b</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span class="space"></span>
            <span>n</span>
            <span>o</span>
            <span>w</span>
         </h1>
         <form className="form_login" onSubmit={handleBook}>
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
            />
            <input
               type="date"
               placeholder="Arrivals"
               ref={arrivalRef}
               required
            />
            <input type="date" placeholder="Leaving" ref={leaveRef} required />

            <input type="submit" value="Book Now" />
         </form>
      </section>
   );
};

export default Booking;

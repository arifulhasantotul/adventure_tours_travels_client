import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
   return (
      <section className="container-fluid footer">
         <div className="footer_wrapper">
            {/* About us  */}
            <article class="box">
               <h3>About us</h3>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente explicabo perspiciatis eligendi illo at perferendis
                  consequatur id alias aliquid natus?
               </p>
            </article>

            <article class="box">
               <h3>Braanch location</h3>
               <NavLink to="/">India</NavLink>
               <NavLink to="/">Bangladesh</NavLink>
               <NavLink to="/">Japan</NavLink>
               <NavLink to="/">USA</NavLink>
               <NavLink to="/">France</NavLink>
            </article>

            <article class="box">
               <h3>Quick links</h3>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/packages">packages</NavLink>
               <NavLink to="/services">Services</NavLink>
               <NavLink to="/gallery">Gallery</NavLink>
               <NavLink to="/">Review</NavLink>
               <NavLink to="/">Contact</NavLink>
            </article>

            <article class="box">
               <h3>Follow us</h3>
               <NavLink to="/">Facebook</NavLink>
               <NavLink to="/">Instagram</NavLink>
               <NavLink to="/">Twitter</NavLink>
               <NavLink to="/">Linkedin</NavLink>
            </article>
         </div>
         <article>
            <h1 class="credit">
               &copy; created by <span>md ariful hasan</span> | all right
               reserved.
            </h1>
         </article>
      </section>
   );
};

export default Footer;

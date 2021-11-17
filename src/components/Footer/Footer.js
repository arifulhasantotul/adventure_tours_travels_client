import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
   return (
      <section className="container-fluid footer">
         <div className="footer_wrapper">
            {/* About us  */}
            <article className="box">
               <h3>About us</h3>
               <p>
                  We are a full-service best travel agency in Cumilla,
                  Bangladesh with a dedicated team of highly skilled and
                  experienced people to assist our valuable clients according to
                  their goals and desired journeys all over the world. We at
                  Adventure travels and tours strive our best to deliver the
                  outstanding service to all our customers.
               </p>
            </article>

            <article className="box">
               <h3>Branch location</h3>
               <NavLink to="/">India</NavLink>
               <NavLink to="/">Bangladesh</NavLink>
               <NavLink to="/">Japan</NavLink>
               <NavLink to="/">USA</NavLink>
               <NavLink to="/">France</NavLink>
            </article>

            <article className="box">
               <h3>Quick links</h3>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/packages">packages</NavLink>
               <NavLink to="/services">Services</NavLink>
               <NavLink to="/gallery">Gallery</NavLink>
               <NavLink to="/">Review</NavLink>
               <NavLink to="/">Contact</NavLink>
            </article>

            <article className="box">
               <h3>Follow us</h3>
               <NavLink to="/">Facebook</NavLink>
               <NavLink to="/">Instagram</NavLink>
               <NavLink to="/">Twitter</NavLink>
               <NavLink to="/">Linkedin</NavLink>
            </article>
         </div>
         <article>
            <h1 className="credit">
               &copy; created by <span>md ariful hasan</span> | all right
               reserved.
            </h1>
         </article>
      </section>
   );
};

export default Footer;

import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("https://infinite-mountain-42809.herokuapp.com/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);
   return (
      <section className="container-fluid package_wrapper">
         <h1 class="heading">
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
            <span>s</span>
         </h1>

         <article className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {services.map((item) => (
               <Service key={item.key} service={item}></Service>
            ))}
         </article>
      </section>
   );
};

export default Services;

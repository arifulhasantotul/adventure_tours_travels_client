import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import SkeletonPackages from "../Skeleton/SkeletonPackages";
import "./Services.css";

const Services = () => {
   const [services, setServices] = useState(null);
   useEffect(() => {
      fetch("https://infinite-mountain-42809.herokuapp.com/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);
   return (
      <section className="container-fluid package_wrapper">
         <h1 className="heading">
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
            {services &&
               services.map((item) => (
                  <Service key={item._id} service={item}></Service>
               ))}
            {!services &&
               [1, 2, 3, 4, 5, 6].map((n) => (
                  <SkeletonPackages key={n} theme="light" />
               ))}
         </article>
      </section>
   );
};

export default Services;

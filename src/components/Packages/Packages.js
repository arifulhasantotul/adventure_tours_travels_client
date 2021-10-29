import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = () => {
   const [packages, setPackages] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8080/packages")
         .then((res) => res.json())
         .then((data) => setPackages(data));
   }, []);
   return (
      <section className="container-fluid package_wrapper">
         <h1 className="heading">
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span>s</span>
         </h1>

         <article className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {packages.map((item) => (
               <Package key={item.key} package={item}></Package>
            ))}
         </article>
      </section>
   );
};

export default Packages;

import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import { useParams } from "react-router";
import "./MyOrders.css";

const MyOrders = () => {
   const { orderId } = useParams();
   const [packageDetails, setPackageDetails] = useState({});
   useEffect(() => {
      const url = `https://infinite-mountain-42809.herokuapp.com/packages/${orderId}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setPackageDetails(data));
   }, [orderId]);
   return (
      <div className="myOrder_wrapper">
         <h1 className="heading">
            <span>m</span>
            <span>y</span>
            <span className="space"></span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span>e</span>
            <span>r</span>
         </h1>

         <div
            className="card mb-3"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
         >
            <div className="row g-0">
               <div className="col-12 col-md-5">
                  <img
                     src={packageDetails?.img}
                     className="img-fluid rounded-start"
                     alt="..."
                  />
               </div>
               <div className="col-12 col-md-7">
                  <div className="card-body">
                     <h3>
                        {" "}
                        <span className="location_icon">
                           <MdIcons.MdLocationPin />
                        </span>{" "}
                        <span>{packageDetails.name}</span>
                     </h3>
                     <p>{packageDetails.description}...</p>
                     <div className="box_star">
                        <Rating
                           initialRating={packageDetails.rating}
                           emptySymbol={<FaIcons.FaRegStar />}
                           fullSymbol={<FaIcons.FaStar />}
                           readonly
                        />
                     </div>
                     <div className="price">
                        {" "}
                        ${packageDetails.discountPrice}{" "}
                        <span>${packageDetails.previousPrice}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyOrders;

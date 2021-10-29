import React from "react";
import * as FaIcons from "react-icons/fa";
import Rating from "react-rating";

const Service = (props) => {
   const { name, rating, description, img } = props.service;
   return (
      <div className="col">
         <div className="box h-100">
            <img src={img} alt="..." />
            <div className="content">
               <h3>
                  {" "}
                  <span>{name}</span>
               </h3>
               <p>{description.slice(0, 90)}...</p>
               <div className="box_star">
                  <Rating
                     initialRating={rating}
                     emptySymbol={<FaIcons.FaRegStar />}
                     fullSymbol={<FaIcons.FaStar />}
                     readonly
                  />
               </div>

               <button className="btn_book">Book Now</button>
            </div>
         </div>
      </div>
   );
};

export default Service;

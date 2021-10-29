import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";

const Package = (props) => {
   const { description, discountPrice, img, name, previousPrice, rating } =
      props.package;
   return (
      <div className="col">
         <div className="box h-100">
            <img src={img} alt="..." />
            <div className="content">
               <h3>
                  {" "}
                  <span className="location_icon">
                     <MdIcons.MdLocationPin />
                  </span>{" "}
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
               <div className="price">
                  {" "}
                  ${discountPrice} <span>${previousPrice}</span>
               </div>
               <button className="btn_book">Book Now</button>
            </div>
         </div>
      </div>
   );
};

export default Package;

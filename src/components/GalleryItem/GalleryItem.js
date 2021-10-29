import React from "react";
import * as FaIcons from "react-icons/fa";
import Rating from "react-rating";

const GalleryItem = ({ photos }) => {
   const { name, img, description, rating } = photos;
   return (
      <div className="col">
         <div className="box h-100">
            <img src={img} alt="" />
            <div className="content">
               <h3>{name}</h3>
               <p>{description.slice(0, 80)}</p>
               <div className="box_star">
                  <Rating
                     initialRating={rating}
                     emptySymbol={<FaIcons.FaRegHeart />}
                     fullSymbol={<FaIcons.FaHeart />}
                     readonly
                  />
               </div>
               <button className="btn_book">See More</button>
            </div>
         </div>
      </div>
   );
};

export default GalleryItem;

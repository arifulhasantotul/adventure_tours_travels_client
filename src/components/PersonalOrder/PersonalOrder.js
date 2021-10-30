import React from "react";
import * as FaIcons from "react-icons/fa";
import Rating from "react-rating";
import "./PersonalOrder.css";
const PersonalOrder = ({ order }) => {
   const { name, discountPrice, previousPrice, rating, img, status } = order;
   return (
      <div>
         <div className="col">
            <div className="box h-100">
               <img src={img} alt="" />
               <div className="content">
                  <h3>{name}</h3>
                  <div className="box_star">
                     <Rating
                        initialRating={rating}
                        emptySymbol={<FaIcons.FaRegHeart />}
                        fullSymbol={<FaIcons.FaHeart />}
                        readonly
                     />
                  </div>
                  <div className="price">
                     {" "}
                     ${discountPrice} <span>${previousPrice}</span>
                  </div>
               </div>
               <h3 className="text-center text-success fw-3">{status}</h3>
            </div>
         </div>
      </div>
   );
};

export default PersonalOrder;

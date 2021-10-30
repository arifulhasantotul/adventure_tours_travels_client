import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Package = (props) => {
   console.log(props);
   const { user } = useAuth();
   const history = useHistory();
   const { _id, description, discountPrice, img, name, previousPrice, rating } =
      props.package;

   const handleOrder = () => {
      history.push(`/orders/myOrders/${_id}`);
      const buyer = user.displayName;
      const email = user.email;
      const newCart = {
         name,
         description,
         img,
         discountPrice,
         previousPrice,
         rating,
         buyer,
         email,
      };
      const url = "https://infinite-mountain-42809.herokuapp.com/orders";
      fetch(url, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(newCart),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("Successfully added to order list");
               props.handleOrderLoader(data);
            }
         });
   };
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
               <button onClick={handleOrder} className="btn_book">
                  Book Now
               </button>
            </div>
         </div>
      </div>
   );
};

export default Package;

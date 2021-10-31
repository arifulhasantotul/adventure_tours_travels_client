import React from "react";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";

const OrderList = ({ order }) => {
   const { _id, name, img, rating, discountPrice, previousPrice } = order;
   const handleDelete = (id) => {
      const url = `http://localhost:8080/orders/${id}`;
      console.log(url);
      fetch(url, {
         method: "DELETE",
         headers: {
            "content-type": "application/json",
            Accept: "application/json",
         },
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.deletedCount) {
               alert("Deleted Successfully");
            }
         });
   };
   return (
      <div
         className="card manage_package mb-3"
         style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
         <div className="row g-0">
            <div className="col-12 col-md-4">
               <img src={img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-12 col-md-4 my-auto">
               <div className="card-body">
                  <h3>
                     {" "}
                     <span className="location_icon">
                        <MdIcons.MdLocationPin />
                     </span>{" "}
                     <span>{name}</span>
                  </h3>
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
               </div>
            </div>
            <div className="col-12 col-md-2 m-auto">
               <button className="btn_book" style={{ fontSize: "3rem" }}>
                  <GrIcons.GrDocumentUpdate />
               </button>
            </div>
            <div className="col-12 col-md-2 m-auto">
               <button
                  onClick={() => handleDelete(_id)}
                  className="btn_book"
                  style={{ fontSize: "3rem" }}
               >
                  <MdIcons.MdDeleteForever />
               </button>
            </div>
         </div>
      </div>
   );
};

export default OrderList;

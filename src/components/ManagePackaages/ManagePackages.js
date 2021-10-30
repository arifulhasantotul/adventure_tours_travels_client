import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import OrderNav from "../../Pages/Orders/OrderNav";
import SkeletonPackages from "../Skeleton/SkeletonPackages";
import "./ManagePackages.css";

const ManagePackages = () => {
   const [orders, setOrders] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      const url = "https://infinite-mountain-42809.herokuapp.com/orders";
      fetch(url)
         .then((res) => res.json())
         .then((data) => setOrders(data))
         .catch((error) => console.log(error))
         .finally(() => setIsLoading(false));
   }, []);

   const handleDelete = (id) => {
      const deleteApi = window.confirm("Do you want to delete this?");
      if (deleteApi) {
         const url = `https://infinite-mountain-42809.herokuapp.com/orders/${id}`;
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
                  const remaining = orders.filter((order) => order._id !== id);
                  setOrders(remaining);
               }
            });
      }
   };
   const statusChanged = { status: "Approved" };
   const handleUpdateStatus = (id) => {
      const url = `https://infinite-mountain-42809.herokuapp.com/orders/${id}`;
      fetch(url, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(statusChanged),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               alert("Modified Successfully");
            }
         });
   };

   return (
      <div className="package_wrapper">
         <OrderNav></OrderNav>
         <h1 className="heading">
            <span>m</span>
            <span>a</span>
            <span>n</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
            <span className="space"></span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
         </h1>
         {isLoading &&
            [1, 2, 3, 4, 5, 6].map((n) => (
               <SkeletonPackages key={n} theme="light" />
            ))}

         {!isLoading &&
            orders.map((order) => (
               <div
                  key={order._id}
                  className="card manage_package mb-3"
                  style={{ maxWidth: "1200px", margin: "0 auto" }}
               >
                  <div className="row g-0">
                     <div className="col-12 col-md-4">
                        <img
                           src={order.img}
                           className="img-fluid rounded-start"
                           alt="..."
                        />
                     </div>
                     <div className="col-12 col-md-4 my-auto">
                        <div className="card-body">
                           <h3>
                              {" "}
                              <span className="location_icon">
                                 <MdIcons.MdLocationPin />
                              </span>{" "}
                              <span>{order.name}</span>
                           </h3>
                           <div className="box_star">
                              <Rating
                                 initialRating={order.rating}
                                 emptySymbol={<FaIcons.FaRegStar />}
                                 fullSymbol={<FaIcons.FaStar />}
                                 readonly
                              />
                           </div>
                           <div className="price">
                              {" "}
                              ${order.discountPrice}{" "}
                              <span>${order.previousPrice}</span>
                           </div>
                           <p>{order.status}</p>
                        </div>
                     </div>
                     <div className="col-12 col-md-2 m-auto text-center">
                        <button
                           onClick={() => handleUpdateStatus(order._id)}
                           className="btn_book"
                           style={{ fontSize: "3rem" }}
                        >
                           <GrIcons.GrDocumentUpdate />
                        </button>
                        <br />
                     </div>
                     <div className="col-12 col-md-2 m-auto">
                        <button
                           onClick={() => {
                              handleDelete(order._id);
                           }}
                           className="btn_book"
                           style={{ fontSize: "3rem" }}
                        >
                           <MdIcons.MdDeleteForever />
                        </button>
                     </div>
                  </div>
               </div>
            ))}
      </div>
   );
};

export default ManagePackages;

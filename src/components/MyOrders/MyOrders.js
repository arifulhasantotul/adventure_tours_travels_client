import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Rating from "react-rating";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import OrderNav from "../../Pages/Orders/OrderNav";
import PersonalOrder from "../PersonalOrder/PersonalOrder";
import SkeletonPackages from "../Skeleton/SkeletonPackages";
import "./MyOrders.css";

const MyOrders = () => {
   const { user } = useAuth();
   const [loading, setLoading] = useState(true);
   const [filterOrderLoad, setFilterOrderLoad] = useState(true);

   const { orderId } = useParams();
   const [packageDetails, setPackageDetails] = useState({});
   const [orders, setOrders] = useState([]);
   const userName = user.displayName;
   const userEmail = user.email;

   const handleOrderList = () => {
      setLoading(true);
      setFilterOrderLoad(true);
      const url = "https://infinite-mountain-42809.herokuapp.com/orders";
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            // filter orders product for personal order list
            const filteredOrders = data.filter(
               (item) => item.buyer === userName && item.email === userEmail
            );

            setOrders(filteredOrders);
         })
         .finally(() => {
            setLoading(false);
            setFilterOrderLoad(false);
         });
   };

   useEffect(() => {
      const url = `https://infinite-mountain-42809.herokuapp.com/packages/${orderId}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => setPackageDetails(data))
         .catch((error) => console.log(error));
   }, [orderId]);

   return (
      <div className="myOrder_wrapper">
         <OrderNav></OrderNav>
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
         {packageDetails.img ? (
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
                        <p>{packageDetails.description}</p>
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
         ) : (
            <div className="text-center text-danger">No new order booked</div>
         )}

         <div className="text-center">
            <button onClick={handleOrderList} className="btn_book">
               Check Order List
            </button>
         </div>

         {!filterOrderLoad && (
            <h1 className="heading">
               <span>o</span>
               <span>r</span>
               <span>d</span>
               <span>e</span>
               <span>r</span>
               <span className="space"></span>
               <span>l</span>
               <span>i</span>
               <span>s</span>
               <span>t</span>
            </h1>
         )}
         {!filterOrderLoad && (
            <article className="personal_order row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
               {orders.map((order) => (
                  <PersonalOrder key={order._id} order={order}></PersonalOrder>
               ))}
               {loading &&
                  [1, 2, 3, 4, 5, 6].map((n) => (
                     <SkeletonPackages key={n} theme="light" />
                  ))}
            </article>
         )}
      </div>
   );
};

export default MyOrders;

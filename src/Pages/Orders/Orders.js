import React from "react";
import OrderNav from "./OrderNav";
import "./Orders.css";

const Orders = () => {
   return (
      <div>
         <h1 className="heading">
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span>e</span>
            <span>r</span>
            <span className="space"></span>
            <span>p</span>
            <span>l</span>
            <span>a</span>
            <span>c</span>
            <span>e</span>
         </h1>
         <OrderNav></OrderNav>
      </div>
   );
};

export default Orders;

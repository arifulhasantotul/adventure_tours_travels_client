import React from "react";
import { NavLink } from "react-router-dom";

const OrderNav = () => {
   return (
      <div>
         <nav className="orders">
            <NavLink activeClassName="selected" to="/orders/myOrders">
               My Orders
            </NavLink>
            <NavLink activeClassName="selected" to="/orders/addPackage">
               Add Package
            </NavLink>
            <NavLink activeClassName="selected" to="/orders/managePackage">
               Manage Package
            </NavLink>
         </nav>
      </div>
   );
};

export default OrderNav;

import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import "./Header.css";

const Header = () => {
   return (
      <div className="header">
         <nav className="header_navbar">
            <div className="navbar_list">
               <div className="d-flex align-items-center ">
                  <GiIcons.GiAirplaneDeparture />
                  <span className="brand_name"> Adventure</span>
               </div>
               <ul className="navbar_icons">
                  <li className="nav_icon">
                     <GrIcons.GrFacebookOption />
                  </li>
                  <li className="nav_icon">
                     <BsIcons.BsInstagram />
                  </li>
                  <li className="nav_icon">
                     <RiIcons.RiHeartsFill />
                  </li>
                  <li className="nav_icon">
                     <HiIcons.HiShoppingCart />
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
};

export default Header;

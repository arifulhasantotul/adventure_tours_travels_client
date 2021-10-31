import React from "react";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
   {
      id: 1,
      title: "Home",
      tClass: "nav_link",
      path: "/home",
      icon: <BiIcons.BiHome className="icon_color" />,
   },
   {
      id: 2,
      title: "Packages",
      tClass: "nav_link",
      path: "/packages",
      icon: <BiIcons.BiCollection />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
   },
   {
      id: 3,
      title: "Gallery",
      tClass: "nav_link",
      path: "/gallery",
      icon: <BiIcons.BiGridAlt />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            id: 31,
            title: "Add Gallery",
            tClass: "sub_nav_link",
            path: "/gallery/add",
            icon: <BiIcons.BiImageAdd />,
         },
         {
            id: 32,
            title: "Manage Gallery",
            tClass: "sub_nav_link",
            path: "/gallery/manage",
            icon: <FaIcons.FaUserCog />,
         },
      ],
   },
   {
      id: 10,
      title: "Services",
      tClass: "nav_link",
      path: "/services",
      icon: <BiIcons.BiCog />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            id: 101,
            title: "Add Service",
            tClass: "sub_nav_link",
            path: "/service/add",
            icon: <BiIcons.BiAddToQueue />,
         },
         {
            id: 102,
            title: "Manage Service",
            tClass: "sub_nav_link",
            path: "/service/manage",
            icon: <FaIcons.FaUsersCog />,
         },
      ],
   },
   {
      id: 4,
      title: "Login",
      tClass: "nav_link",
      path: "/login",
      icon: <BiIcons.BiBookAlt />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
   },
   {
      id: 5,
      title: "Orders",
      tClass: "nav_link",
      path: "/orders",
      icon: <BiIcons.BiPieChartAlt2 />,
   },
   {
      id: 9,
      title: "History",
      tClass: "nav_link",
      path: "/history",
      icon: <BiIcons.BiHistory />,
   },
];

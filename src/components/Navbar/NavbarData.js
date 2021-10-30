import React from "react";
import * as BiIcons from "react-icons/bi";

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
            icon: <BiIcons.BiFace />,
         },
         {
            id: 32,
            title: "Manage Gallery",
            tClass: "sub_nav_link",
            path: "/gallery/manage",
            icon: <BiIcons.BiBrush />,
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
            icon: <BiIcons.BiFace />,
         },
         {
            id: 102,
            title: "Manage Service",
            tClass: "sub_nav_link",
            path: "/service/manage",
            icon: <BiIcons.BiBrush />,
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
      id: 6,
      title: "Chart",
      tClass: "nav_link",
      path: "/chart",
      icon: <BiIcons.BiLineChart />,
   },
   {
      id: 7,
      title: "Plugins",
      tClass: "nav_link",
      path: "/plugins",
      icon: <BiIcons.BiPlug />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            id: 71,
            title: "UI Face",
            tClass: "sub_nav_link",
            path: "/plugins/plugin1",
            icon: <BiIcons.BiFace />,
         },
         {
            id: 72,
            title: "Pigments",
            tClass: "sub_nav_link",
            path: "/plugins/plugin2",
            icon: <BiIcons.BiBrush />,
         },
         {
            id: 73,
            title: "Box Icons",
            tClass: "sub_nav_link",
            path: "/plugins/plugin3",
            icon: <BiIcons.BiCubeAlt />,
         },
      ],
   },
   {
      id: 8,
      title: "Explore",
      tClass: "nav_link",
      path: "/explore",
      icon: <BiIcons.BiCompass />,
   },
   {
      id: 9,
      title: "History",
      tClass: "nav_link",
      path: "/history",
      icon: <BiIcons.BiHistory />,
   },
];

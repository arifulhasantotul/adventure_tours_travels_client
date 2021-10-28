import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "../../images/pic01.jpg";
import pic2 from "../../images/pic02.jpg";
import pic3 from "../../images/pic03.jpg";
import pic4 from "../../images/pic04.jpg";
import pic5 from "../../images/pic05.jpg";
import pic6 from "../../images/pic06.jpg";
import "./Banner.css";

const Banner = () => {
   return (
      <>
         <Carousel fade>
            <Carousel.Item interval={2000} className="banner_item">
               <img className="d-block w-100" src={pic1} alt="First slide" />
               <Carousel.Caption>
                  <h3>ADVENTURE IS WORTHWHILE</h3>
                  <p>Discover new places with us, adventure awaits</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="banner_item">
               <img className="d-block w-100" src={pic2} alt="Second slide" />
               <Carousel.Caption>
                  <h3>ADVENTURE IS WORTHWHILE</h3>
                  <p>Discover new places with us, adventure awaits</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="banner_item">
               <img className="d-block w-100" src={pic3} alt="Third slide" />
               <Carousel.Caption>
                  <h3>ADVENTURE IS WORTHWHILE</h3>
                  <p>Discover new places with us, adventure awaits</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="banner_item">
               <img className="d-block w-100" src={pic4} alt="Third slide" />
               <Carousel.Caption>
                  <h3>ADVENTURE IS WORTHWHILE</h3>
                  <p>Discover new places with us, adventure awaits</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="banner_item">
               <img className="d-block w-100" src={pic5} alt="Third slide" />
               <Carousel.Caption>
                  <h3>ADVENTURE IS WORTHWHILE</h3>
                  <p>Discover new places with us, adventure awaits</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000} className="banner_item">
               <img className="d-block w-100" src={pic6} alt="Third slide" />
               <Carousel.Caption>
                  <h3>ADVENTURE IS WORTHWHILE</h3>
                  <p>Discover new places with us, adventure awaits</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </>
   );
};

export default Banner;

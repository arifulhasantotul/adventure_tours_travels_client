import React, { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import SkeletonPackages from "../Skeleton/SkeletonPackages";
import "./Gallery.css";

const Gallery = () => {
   const [photos, setPhotos] = useState(null);

   useEffect(() => {
      fetch("https://infinite-mountain-42809.herokuapp.com/gallery")
         .then((res) => res.json())
         .then((data) => setPhotos(data));
   }, []);
   return (
      <section className="container-fluid gallery_wrapper">
         <h1 className="heading">
            <span>g</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>r</span>
            <span>y</span>
         </h1>

         <article className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {photos &&
               photos.map((item) => (
                  <GalleryItem key={item._id} photos={item}></GalleryItem>
               ))}
            {!photos &&
               [1, 2, 3, 4, 5, 6].map((n) => (
                  <SkeletonPackages key={n} theme="light" />
               ))}
         </article>
      </section>
   );
};

export default Gallery;

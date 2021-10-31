import React, { useRef } from "react";
import OrderNav from "../../Pages/Orders/OrderNav";

const AddPackages = () => {
   const nameRef = useRef();
   const linkRef = useRef();
   const dPriceRef = useRef();
   const priceRef = useRef();
   const descriptionRef = useRef();
   const ratingRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
      const img = linkRef.current.value;
      const discountPrice = dPriceRef.current.value;
      const price = priceRef.current.value;
      const rating = ratingRef.current.value;

      const data = {
         name: name,
         description: description,
         img: img,
         discountPrice: discountPrice,
         previousPrice: price,
         rating: parseFloat(rating),
      };

      fetch("https://infinite-mountain-42809.herokuapp.com/packages", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("Successfully added package.");
               e.target.reset();
            }
         });
   };

   return (
      <div className="package_wrapper">
         <OrderNav></OrderNav>
         <h1 className="heading">
            <span>a</span>
            <span>d</span>
            <span>d</span>
            <span className="space"></span>
            <span>p</span>
            <span>a</span>
            <span>c</span>
            <span>k</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
         </h1>

         <form className="form_login" onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Package Name"
               ref={nameRef}
               required
            />
            <input type="text" placeholder="Image url" ref={linkRef} required />
            <input
               type="number"
               placeholder="Discount Price"
               ref={dPriceRef}
               required
            />
            <input
               type="number"
               placeholder="Normal Price"
               ref={priceRef}
               required
            />
            <input
               type="text"
               placeholder="Rating (<=5)"
               ref={ratingRef}
               required
            />
            <textarea
               placeholder="Description"
               ref={descriptionRef}
               cols="20"
               rows="5"
               required
            ></textarea>
            <input type="submit" value="Add Package" />
         </form>
      </div>
   );
};

export default AddPackages;

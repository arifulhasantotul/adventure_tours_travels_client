import React, { useRef } from "react";

const AddServices = () => {
   const nameRef = useRef();
   const linkRef = useRef();
   const descriptionRef = useRef();
   const ratingRef = useRef();

   const handleSubmit = (e) => {
      e.preventDefault();
      const name = nameRef.current.value;
      const description = descriptionRef.current.value;
      const img = linkRef.current.value;
      const rating = ratingRef.current.value;

      const data = {
         name: name,
         description: description,
         img: img,
         rating: parseFloat(rating),
      };

      fetch("https://infinite-mountain-42809.herokuapp.com/services", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               alert("Successfully added service.");
               e.target.reset();
            }
         });
   };

   return (
      <div>
         <h1 className="heading">
            <span>a</span>
            <span>d</span>
            <span>d</span>
            <span className="space"></span>
            <span>s</span>
            <span>e</span>
            <span>r</span>
            <span>v</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
         </h1>
         <form className="form_login" onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Service Name"
               ref={nameRef}
               required
            />
            <input type="text" placeholder="Image url" ref={linkRef} required />
            <input type="text" placeholder="Rating" ref={ratingRef} required />
            <textarea
               placeholder="Description"
               ref={descriptionRef}
               cols="20"
               rows="5"
               required
            ></textarea>
            <input type="submit" value="Add Service" />
         </form>
      </div>
   );
};

export default AddServices;

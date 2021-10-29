import React from "react";
import Banner from "../../components/Banner/Banner";
import Packages from "../../components/Packages/Packages";

const Home = () => {
   return (
      <section className="home_section">
         <Banner></Banner>
         <Packages></Packages>
      </section>
   );
};

export default Home;

import React from "react";
import Banner from "../../components/Banner/Banner";
import Packages from "../../components/Packages/Packages";
import Services from "../../components/Services/Services";

const Home = () => {
   return (
      <section className="home_section">
         <Banner></Banner>
         <Packages></Packages>
         <Services></Services>
      </section>
   );
};

export default Home;

import React from "react";

import HeaderComponent from "../component/home/HeaderComponent";
import FeaturedComponent from "../component/home/FeaturedComponent";
import SpecialOffers from "../component/home/SpecialOffers";

const Home = () => {
  return (
    <div className="px-5 my-5">
      <HeaderComponent />
      <FeaturedComponent />
      <SpecialOffers />
    </div>
  );
};

export default Home;

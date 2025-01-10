import React from "react";

import HeaderComponent from "../component/home/HeaderComponent";
import FeaturedComponent from "../component/home/FeaturedComponent";

const Home = () => {
  return (
    <div className="px-5 my-5">
      <HeaderComponent />
      <FeaturedComponent />
    </div>
  );
};

export default Home;

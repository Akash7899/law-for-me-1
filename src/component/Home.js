import React from "react";
import Header from "../layout/header";
import Aboutus from "./aboutus";
import Banner from "./banner";
import Clientcard from "./clientcard";
import SimpleSlider from "./slider/cards/catagories-slider";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <SimpleSlider />
      <Clientcard />
      <Aboutus />
    </>
  );
};

export default Home;

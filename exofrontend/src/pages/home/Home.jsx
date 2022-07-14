import React from "react";
import AssestSupport from "../assetSupport/AssestSupport";
import HomeWallet from "../homeWallet/HomeWallet";
import MobileWallet from "../mobile/MobileWallet";
import Carousel from "../testimoney/Carousel";
import ExoSection from "../ui/ExoSection";

const Home = () => {
  return (
    <>
      <ExoSection />
      <HomeWallet />
      <AssestSupport />
      <MobileWallet />
      <Carousel />
    </>
  );
};

export default Home;

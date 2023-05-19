import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import CustomTabs from "../CustomTabs/CustomTabs";
import AllBrands from "../AllBrands/AllBrands";
import Map from "../Map/Map";
import OurLocation from "../OurLocation/OurLocation";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <CustomTabs></CustomTabs>
      <AllBrands></AllBrands>
      <div>
      <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">Find Us</h1>
        <div className="md:flex items-center gap-20">
          <Map></Map>
          <OurLocation></OurLocation>
        </div>
      </div>
    </div>
  );
};

export default Home;

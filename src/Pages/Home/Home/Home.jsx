import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import CustomTabs from "../CustomTabs/CustomTabs";
import AllBrands from "../AllBrands/AllBrands";
import Map from "../Map/Map";
import OurLocation from "../OurLocation/OurLocation";
import { PulseLoader } from "react-spinners";
import useTitle from "../../../Utilitys/TitleFunction";
import Policy from "../Policy/Policy";
import WhyShop from "../WhyShop/WhyShop";

const Home = () => {
  
useTitle('JUGUETE ÚNICO | Home');

  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);


  return (
    <>
    {
      reactLoading ? (
        <PulseLoader className="text-center bg-transparent mt-96" color="#36d7b7" />
      ) :
      
      <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <WhyShop />
      <CustomTabs></CustomTabs>
      <AllBrands></AllBrands>
      <Policy />
      <div className="container mx-auto px-2">
      <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">Find Us</h1>
        <div className="md:flex items-center gap-20">
          <Map></Map>
          <OurLocation></OurLocation>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default Home;

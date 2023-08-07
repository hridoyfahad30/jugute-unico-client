import React from "react";
import Brand from "./Brand/Brand";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";

const AllBrands = () => {

  const toys = useLoaderData();

  return (
    <div className="container mx-auto px-2 md:my-28">
      <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">
        All Brands
      </h1>
      <Marquee pauseOnHover={true} className="h-72">
        {
          toys.map(toy => <Brand key={toy._id} toy={toy}></Brand>)
        }
      </Marquee>
    </div>
  );
};

export default AllBrands;

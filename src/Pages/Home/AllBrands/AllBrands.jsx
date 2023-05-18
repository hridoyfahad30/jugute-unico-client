import React from "react";
import Brand from "./Brand/Brand";
import Marquee from "react-fast-marquee";

const AllBrands = () => {
  return (
    <div className="my-28">
      <h1 className="text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">
        All Brands
      </h1>
      <Marquee className="h-96">
        <Brand></Brand>
        <Brand></Brand>
        <Brand></Brand>
        <Brand></Brand>
        <Brand></Brand>
      </Marquee>
    </div>
  );
};

export default AllBrands;

/* eslint-disable react/prop-types */
import React from "react";

const Brand = ({toy}) => {

  const {photo, brand} = toy;

  return (    
        <div className="card w-48 h-48 bg-gradient-to-tl from-green-300 to-lime-300 shadow-2xl text-primary-content mx-4 md:mx-20">
          <div className="card-body mx-auto">
            <img className={photo} alt="" />
            <h1 className="text-black text-center text-xl font-semibold">{brand}</h1>
          </div>
        </div>
  );
};

export default Brand;

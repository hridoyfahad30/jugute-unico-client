import React from "react";
import Brand from "./Brand/Brand";
import Marquee from "react-fast-marquee";
import { FaDollarSign, FaShippingFast, FaTeamspeak } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllBrands = () => {

  const toys = useLoaderData();

  return (
    <div className="my-28">
      <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">
        All Brands
      </h1>
      <Marquee className="h-72">
        {
          toys.map(toy => <Brand key={toy._id} toy={toy}></Brand>)
        }
      </Marquee>

    <div className="flex justify-around flex-wrap gap-5 items-center my-6 md:my-12 bg-gradient-to-br from-lime-200 to-green-200  py-12" data-aos="zoom-in" data-aos-duration="700">
        <div className="flex items-center gap-3 border-2 border-black p-2 rounded-xl w-96">
            <div>
                <FaShippingFast className="text-7xl text-green-600 border-4 border-green-700 rounded-full p-2" />
            </div>
            <div className="">
                <h5 className="text-2xl font-semibold">Free Shipping & Return</h5>
                <h6 className="text-xl font-medium">Door Steep Delivery For You</h6>
            </div>

        </div>
        <div className="flex items-center gap-3 border-2 border-black p-2 rounded-xl w-96">
            <div>
                <FaDollarSign className="text-7xl text-green-600 border-4  border-green-700 rounded-full p-2" />
            </div>
            <div className="">
                <h5 className="text-2xl font-semibold">7 Days Mony Back</h5>
                <h6 className="text-xl font-medium">If Product Is Unsatisfactory</h6>
            </div>

        </div>
        <div className="flex items-center gap-3 border-2 border-black p-2 rounded-xl w-96">
            <div>
                <FaTeamspeak className="text-7xl text-green-600 border-4  border-green-700 rounded-full p-2" />
            </div>
            <div className="">
                <h5 className="text-2xl font-semibold">24/7 Support</h5>
                <h6 className="text-xl font-medium">Customers Can Get Help</h6>
            </div>

        </div>
        
    </div>

    </div>
  );
};

export default AllBrands;

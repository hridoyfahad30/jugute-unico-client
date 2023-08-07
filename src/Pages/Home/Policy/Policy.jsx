import React from "react";
import { FaDollarSign, FaShippingFast, FaTeamspeak } from "react-icons/fa";

const Policy = () => {
  return (
    <div>
      <div
        className="flex justify-around flex-wrap gap-5 items-center my-6 md:my-12 bg-gradient-to-br from-lime-200 to-green-200 py-12"
        data-aos="zoom-in"
      >
        <div
          className="flex items-center gap-3 border-2 border-black p-2 rounded-xl w-96"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div>
            <FaShippingFast className="text-7xl text-green-600 border-4 border-green-700 rounded-full p-2" />
          </div>
          <div className="">
            <h5 className="text-2xl font-semibold">Free Shipping & Return</h5>
            <h6 className="text-xl font-medium">Door Steep Delivery For You</h6>
          </div>
        </div>
        <div
          className="flex items-center gap-3 border-2 border-black p-2 rounded-xl w-96"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div>
            <FaDollarSign className="text-7xl text-green-600 border-4  border-green-700 rounded-full p-2" />
          </div>
          <div className="">
            <h5 className="text-2xl font-semibold">7 Days Mony Back</h5>
            <h6 className="text-xl font-medium">
              If Product Is Unsatisfactory
            </h6>
          </div>
        </div>
        <div
          className="flex items-center gap-3 border-2 border-black p-2 rounded-xl w-96"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
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

export default Policy;

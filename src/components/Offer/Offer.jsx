import React from "react";
import Marquee from "react-fast-marquee";

const Offer = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/tzsqxy3/image.png')]">
      <Marquee
      speed={70}
      >
        <div className="flex justify-center items-center gap-40 backdrop-blur-sm h-16 ">
          <h2 className="text-2xl font-semibold text-green-700">
            SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR{" "}
            <span className="text-red-500">$1/MONTH</span>
          </h2>
          <h2 className="text-2xl font-semibold text-green-600">
            SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR{" "}
            <span className="text-red-500">$1/MONTH</span>
          </h2>
          <h2 className="text-2xl font-semibold text-green-600">
            SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR{" "}
            <span className="text-red-500">$1/MONTH</span>
          </h2>
        </div>
      </Marquee>
    </div>
  );
};

export default Offer;

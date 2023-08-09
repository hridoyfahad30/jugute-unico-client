import React from "react";

const WhyShop = () => {
  return (
    <div className="mx-auto md:my-28 px-2">
      <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600 mx-36">
        Why shop with us?
      </h1>
      <div className="flex justify-around items-center my-12 py-12">
        <div className="flex flex-col justify-center items-center  mx-auto">
          <img
          className="w-24 my-4"
            src="//new-ella-demo.myshopify.com/cdn/shop/files/home19-icon-us-1.png?v=1645415049"
            alt=""
          />
          <h4 className="text-2xl font-semibold">Free Shipping On First Order</h4>
          <p className="">Praesent suscipit mattis facilisis.</p>
          <a className="underline hover:text-blue-600 hover:cursor-pointer">Learn More</a>
        </div>
        <div className="flex flex-col justify-center items-center  mx-auto">
          <img
          className="w-24 my-4"
            src="//new-ella-demo.myshopify.com/cdn/shop/files/home19-icon-us-2.png?v=1645415065
            "
            alt=""
          />
          <h4 className="text-2xl font-semibold">Weekly Flash Sale</h4>
          <p className="">Praesent suscipit mattis facilisis.</p>
          <a className="underline hover:text-blue-600 hover:cursor-pointer">Learn More</a>
        </div>
        <div className="flex flex-col justify-center items-center  mx-auto">
          <img
          className="w-24 my-4"
            src="//new-ella-demo.myshopify.com/cdn/shop/files/home19-icon-us-3.png?v=1645415079"
            alt=""
          />
          <h4 className="text-2xl font-semibold">Annual Payment Discount</h4>
          <p className="">Praesent suscipit mattis facilisis.</p>
          <a className="underline hover:text-blue-600 hover:cursor-pointer">Learn More</a>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <img
          className="w-24 my-4"
            src="//new-ella-demo.myshopify.com/cdn/shop/files/home19-icon-us-4.png?v=1645415094"
            alt=""
          />
          <h4 className="text-2xl font-semibold">Cashback Reward Program</h4>
          <p className="">Praesent suscipit mattis facilisis.</p>
          <a className="underline hover:text-blue-600 hover:cursor-pointer">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default WhyShop;

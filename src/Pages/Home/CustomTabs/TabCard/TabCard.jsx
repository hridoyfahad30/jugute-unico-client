import React from "react";
import { useLoaderData } from "react-router-dom";

const TabCard = () => {

  const toys = useLoaderData();

  return (
    <div className="card w-96 glass hover:shadow-2xl hover:shadow-green-300 my-10 duration-300 mx-auto" data-aos="fade-up">
      <figure>
        <img
          className="p-4"
          src="https://i.ibb.co/M1rD3wk/image.png"
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <p className="text-3xl">Super Police</p>
        <div className="card-actions justify-between my-3">
          <div className="badge badge-outline text-lg p-4">Fashion</div>
          <div className="badge badge-outline text-lg p-4">Products</div>
        </div>
        <div className="card-actions justify-center mt-4">
          <button className="btn bg-green-600 border-none hover:bg-green-500 hover:text-black text-xl">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default TabCard;

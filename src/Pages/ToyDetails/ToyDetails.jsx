import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const { photo, name, sellerName, price, rating, quantity, details } =
    toyDetails;

  return (
    <div className="my-12">
      <div className="card border-2  w-96  bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">
            {name}
            <div className="rounded-2xl bg-green-700 border-none text-white text-xl px-4 py-2">
              ${price}
            </div>
          </h2>
          <p className="text-xl my-4">{details}</p>
          <div>
          <h5 className="text-lg">Seller Name: <span className="text-lg font-semibold">{sellerName}</span></h5>
          </div>
          <div className="card-actions justify-between">
            <div>Quantity: <span className="text-lg font-semibold">{quantity}</span> pics</div>
            <div className="">
              <Rating style={{ maxWidth: 140 }} value={rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;

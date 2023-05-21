import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { PulseLoader } from "react-spinners";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const { photo, name, sellerName, sellerEmail, price, rating, quantity, details } =
    toyDetails;

    const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 600);
  }, []);

  return (
    <>
      {
        reactLoading ? (
          <PulseLoader className="text-center mt-96" color="#36d7b7" />
        ) :

        <div className="py-12 bg-[url('https://i.ibb.co/Yt9wFjS/wallpaperflare-com-wallpaper-6-1.jpg')]">
        <div className="card border-2  w-96 md:w-[576px]  bg-base-100 shadow-xl mx-auto hover:shadow-2xl hover:shadow-green-600">
          <figure>
            <img className="" src={photo} alt="Shoes" />
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
            <h5 className="text-lg my-2">Seller Name: <span className="text-lg font-semibold">{sellerName}</span></h5>
            <h5 className="text-lg my-2">Seller Email: <span className="text-lg font-semibold">{sellerEmail}</span></h5>
            </div>
            <div className="card-actions justify-between">
              <div>Quantity: <span className="text-lg font-semibold">{quantity}</span> pics</div>
              <div className="">
                <Rating style={{ maxWidth: 140 }} value={rating} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};

export default ToyDetails;

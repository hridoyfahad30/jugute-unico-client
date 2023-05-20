/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import React from "react";
import { Link } from "react-router-dom";

const TabCard = ({toy}) => {

  const {_id, photo, name, price, rating} = toy;


  return (
    <div className="card w-96 glass hover:shadow-2xl hover:shadow-green-300 my-10 duration-300 mx-auto" data-aos="fade-up">
      <figure>
        <img
          className="p-4"
          src={photo}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <p className="text-3xl">{name}</p>
        <div className="card-actions justify-between my-3">
          <div className="badge badge-outline text-lg p-4">$ {price}</div>
          <div className="">
              <Rating style={{ maxWidth: 140 }} value={rating} readOnly />
            </div>
        </div>

        <div className="card-actions justify-center mt-4">
        <Link to={`/toy/${_id}`} className="btn btn-ghost text-lg text-white bg-green-600 hover:bg-green-500">
          View Details 
        </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;

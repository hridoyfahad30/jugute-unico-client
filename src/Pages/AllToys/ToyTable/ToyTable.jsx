/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ToyTable = ({ toy }) => {
  const { _id, name, sellerName, price, quantity, subcategory, photo } = toy;

  return (
    <tr>
      <th>
        <div className="text-lg font-light">{sellerName}</div>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">{name}</div>
          </div>
        </div>
      </td>
      <td className="text-lg">{subcategory}</td>
      <td className="text-lg">${price}</td>
      <th>{quantity}</th>
      <th className="">
        <Link to={`/toy/${_id}`} className="btn btn-ghost text-lg bg-green-600 hover:bg-green-500">
          View Details 
        </Link>
      </th>
    </tr>
  );
};

export default ToyTable;

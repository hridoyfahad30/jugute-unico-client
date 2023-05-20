/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ToyTable from "../ToyTable/ToyTable";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {

  const toys = useLoaderData();

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Search by Toy Name…"
          className="input input-bordered"
        />
        <button className="btn btn-square bg-green-600 hover:bg-green-700">
          <FaSearch />
        </button>
      </div>

      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th className="text-center">View Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <ToyTable key={toy._id}  toy={toy}></ToyTable>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th className="text-center">View Details</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

    </div>
  );
};

export default AllToys;

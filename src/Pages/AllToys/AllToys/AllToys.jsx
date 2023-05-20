/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import ToyTable from "../ToyTable/ToyTable";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {

  const [searchText, setSearchText] = useState("");
  const [toys, setToys] = useState([]);

  useEffect(()=>{

    fetch(`http://localhost:5000/toys`)
    .then(res => res.json())
    .then(data => setToys(data))

  },[])

  const handleSearch = () => {
    fetch(`http://localhost:5000/toySearch/${searchText}`)
    .then(res => res.json())
    .then(data => setToys(data))
  }

  return (
    <div>
      <div className="input-group">
        <input
          onChange={(e)=>{setSearchText(e.target.value)}}
          type="text"
          placeholder="Search by Toy Name…"
          className="input input-bordered"
        />
        <button onClick={handleSearch} className="btn btn-square bg-green-600 hover:bg-green-700">
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

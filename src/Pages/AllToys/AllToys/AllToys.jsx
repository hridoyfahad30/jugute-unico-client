import React from "react";
import ToyTable from "../ToyTable/ToyTable";
import { FaSearch } from "react-icons/fa";

const AllToys = () => {
  return (
    <div>
        <div className="input-group mx-20 my-4 md:my-8">
          <input
            type="text"
            placeholder="Search by Toy Name…"
            className="input input-bordered"
          />
          <button className="btn btn-square bg-green-600 hover:bg-green-700">
            <FaSearch />
          </button>
        </div>
      
      <ToyTable></ToyTable>
    </div>
  );
};

export default AllToys;

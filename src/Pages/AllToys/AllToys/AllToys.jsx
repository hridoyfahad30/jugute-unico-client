/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import ToyTable from "../ToyTable/ToyTable";
import { FaSearch } from "react-icons/fa";
import { PulseLoader } from "react-spinners";

const AllToys = () => {
  const [searchText, setSearchText] = useState("");
  const [toys, setToys] = useState([]);
  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    fetch(`https://toy-server-tau.vercel.app/toys/limit`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleSeeMore = () => {
    fetch(`https://toy-server-tau.vercel.app/toys`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }

  const handleSearch = () => {
    fetch(`https://toy-server-tau.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <>
      {reactLoading ? (
        <PulseLoader className="text-center mt-72" color="#36d7b7" />
      ) : (
        <div className="container mx-auto mt-8">
          <div className="input-group">
            <input
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              type="text"
              placeholder="Search by Toy Name…"
              className="input input-bordered"
            />
            <button
              onClick={handleSearch}
              className="btn btn-square bg-green-600 hover:bg-green-700"
            >
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
                  {toys.length == 0 ? (
                    <button className="btn bg-green-600 loading my-4">
                      loading
                    </button>
                  ) : (
                    <>
                      {toys.map((toy) => (
                        <ToyTable key={toy._id} toy={toy}></ToyTable>
                      ))}{" "}
                    </>
                  )}
                 
                <div className="flex justify-end w-full mx-auto">
                    {
                      toys.length == 10 && 

                      <button onClick={handleSeeMore} className="btn bg-green-600 my-6">See more</button>}
                  </div>
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
      )}
    </>
  );
};

export default AllToys;

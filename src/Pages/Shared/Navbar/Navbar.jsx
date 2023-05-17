import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink/ActiveLink";
import { FaShippingFast } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="my-4 flex items-center">
      <div>
        <Link>
          <img
            className="w-20 md:w-36"
            src="https://i.ibb.co/3dxMCn7/image-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>

      <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
            <ActiveLink to='/'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-200 rounded-lg">Home</button></ActiveLink>
            <ActiveLink to='/Shop'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-100 rounded-lg">All Toys</button></ActiveLink>
            <ActiveLink to='/about'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-100 rounded-lg">My Toys</button></ActiveLink>
            <ActiveLink to='/Service'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-100 rounded-lg">Add A Toy</button></ActiveLink>
            <ActiveLink to='/Service'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-100 rounded-lg">Blogs</button></ActiveLink>
        </div>

        <div className="flex items-center gap-2 border-2 p-2 rounded-lg hover:border-green-800 duration-300">
            <div>
                <FaShippingFast className="text-6xl border-4 border-green-700 p-2 rounded-full text-green-700" />
            </div>
            <div>
                <h5>FREE SHIPPING</h5>
                <h5>On order over $999</h5>
            </div>

        </div>

        <div>
            <Link><button>Login</button></Link>
        </div>

    </nav>
  );
};

export default Navbar;

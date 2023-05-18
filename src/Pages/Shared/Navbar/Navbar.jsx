import React from "react";
import ActiveLink from './ActiveLink/ActiveLink';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {


  const navItems = (
    <div>

      <ActiveLink to='/'><button className="px-6 py-4 text-lg font-semibold text-black hover:bg-green-600 rounded-lg">Home</button></ActiveLink>
      <ActiveLink to='/Shop'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-600 rounded-lg">All Toys</button></ActiveLink>
      <ActiveLink to='/about'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-600 rounded-lg">My Toys</button></ActiveLink>
      <ActiveLink to='/Service'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-600 rounded-lg">Add A Toy</button></ActiveLink>
      <ActiveLink to='/Service'><button className="px-5 py-4 text-lg font-semibold text-black hover:bg-green-600 rounded-lg">Blogs</button></ActiveLink>

    </div>
  )

  return (
    <div className="" data-aos="fade-down" data-aos-duration="2000">
      <div className="navbar ">
        <div className="navbar-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link><img className="w-24 md:w-32" src="https://i.ibb.co/3dxMCn7/image-removebg-preview.png" alt="" /></Link>
          <div>
          <div className="input-group mx-20 hidden md:block">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square bg-green-600 hover:bg-green-700">
              <FaSearch />
            </button>
          </div>
          
          </div>
        </div>
        <div className="navbar-start hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        
        <Link className="flex justify-center items-center gap-2 border-2 p-2 rounded-lg hover:border-green-600 duration-300 w-3/6 md:w-2/6 ml-4 md:ml-8">
            <div>
                <FaShoppingCart className="text-2xl md:text-4xl text-green-600" />
            </div>
            
            <div>
                <h5 className="text-sm ">5 Items</h5>
                <hr className="my-1" />
                <h5 className="text-sm text-green-700">$ 599</h5>
            </div>
        </Link>
        <div className="navbar-end">
          <a className="btn bg-green-700 hover:bg-green-600">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-12">
      <footer className="footer p-10 text-xl">
        <div>
          <Link>
            <img
              className="w-24 md:w-32"
              src="https://i.ibb.co/3dxMCn7/image-removebg-preview.png"
              alt=""
            />
          </Link>
          <h4 className="">All Toy In One Place</h4>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link target="_blank" to='https://www.facebook.com/ILOVEYOUFAHAD'>
              <button><FaFacebook className="text-4xl text-blue-500 hover:text-blue-600 duration-300" /></button>
            </Link>
            <Link target="_blank" to='https://twitter.com/hridoy_fahad30'>
              <button><FaTwitter className="text-4xl text-blue-400 hover:text-blue-500 duration-300" /></button>
            </Link>
            <Link target="_blank" to='https://www.youtube.com/channel/UCvF5Qs8svG2ZXnKNU3XbGYA'>
              <button><FaYoutube className="text-4xl text-red-500 hover:text-red-600 duration-300" /></button>
            </Link>
            
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by JUGUETE ÚNICO</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

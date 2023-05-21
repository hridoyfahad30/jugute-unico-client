import React from 'react';
import {
    FaLocationArrow,
    FaPhone,
    FaRegEnvelope,
  } from "react-icons/fa";

const OurLocation = () => {
    return (
        <div className="space-y-6 px-2" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="700">
            <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">Our Location</h1>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            minima obcaecati maiores quasi quis cumque veniam tempora voluptatem
            quaerat dolores.
          </p>
          <div className="space-y-2">
            <p className="flex items-start gap-2 text-xl">
              <span className="text-3xl text-green-700">
                <FaLocationArrow />
              </span>{" "}
              Address:{" "}
              <span className="font-semibold">
                14 Rue Godin des Odonais, 18200 Saint-Amand-Montrond, France
              </span>
            </p>
            <p className="flex items-center gap-2 text-xl">
              <span className="text-3xl text-green-700">
                <FaPhone />
              </span>{" "}
              Phone: <span className="font-semibold">+673 232 43 234</span>
            </p>
            <p className="flex items-center gap-2 text-xl">
              <span className="text-3xl text-green-700">
                <FaRegEnvelope />
              </span>{" "}
              Email:{" "}
              <span className="font-semibold">info@JUGUETEÚNICO.com</span>
            </p>
          </div>
        </div>
    );
};

export default OurLocation;
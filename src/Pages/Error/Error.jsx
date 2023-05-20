import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { status, error } = useRouteError();
  return (
    <div className="bg-[url('https://i.ibb.co/X554b3b/bg.png')] h-screen bg-cover flex items-center justify-center">
      <div className="space-y-10">
        <h1 className="text-center text-9xl text-red-500">{status}</h1>
        <h1 className="text-center text-5xl text-white">{error.message}</h1>
        <Link to='/' className="flex justify-center items-center gap-2 px-8 py-4 rounded-lg  font-bold text-center text-2xl duration-300 bg-green-600 hover:bg-green-500 mx-auto hover:skew-y-3">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Error;

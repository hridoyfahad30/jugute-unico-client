import React from "react";
import { useLoaderData } from "react-router-dom";


const Gallery = () => {

    const toys = useLoaderData();     

    

  return (
    <div className="container mx-auto my-28">
        
        <h1 className="text-4xl md:text-6xl text-green-600 font-semibold my-8 pb-4 border-b-4 border-green-600">Our Super Car Gallery</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className=""  data-aos="fade-right" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-700 hover:scale-105  " src={toys[5].photo} alt="" />

        </div>
        <div className=""  data-aos="fade-down" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[7].photo} alt="" />

        </div>
        <div className=""  data-aos="fade-left" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[8].photo} alt="" />

        </div>
        <div className="col-span-2 "  data-aos="zoom-in-down" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[1].photo} alt="" />

        </div>
        <div className=""  data-aos="zoom-in-up" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[2].photo} alt="" />

        </div>
        <div className=""  data-aos="zoom-in-down" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[3].photo} alt="" />

        </div>
        <div className="col-span-2 "  data-aos="zoom-in-down" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[4].photo} alt="" />

        </div>
        <div className=""  data-aos="fade-right" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[6].photo} alt="" />

        </div>
        <div className=""  data-aos="fade-up" data-aos-duration="1000">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[10].photo} alt="" />

        </div>
        <div className=""  data-aos="fade-left" data-aos-duration="1500">
            <img className="h-72 w-full rounded-2xl brightness-50 hover:brightness-100 duration-500 hover:scale-105 " src={toys[11].photo} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Gallery;

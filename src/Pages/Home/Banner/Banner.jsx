import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

function Banner() {
  const { user } = useContext(AuthContext);
  const toys = useLoaderData();
  const nevigate = useNavigate();
  

  const handleViewDetails = (_id) => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to view details",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          nevigate(`/toy/${_id}`);
        }
      });
    } else {
      nevigate(`/toy/${_id}`);
    }
  };

  return (
      <div className="bg-fixed pt-20 pb-8 -mt-16 bg-[url('https://i.ibb.co/C8gdQnV/wallpaperflare-com-wallpaper-3-1.jpg')]">
      <div
        className="container mx-auto md:py-8"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <Swiper
          effect={"coverflow"}
          zoom={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {toys.slice(0, 14).map((toy) => (
            <SwiperSlide key={toy._id} className="p-10">
              <img
                className="h-44 md:h-[720px] w-80 md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300"
                src={toy.photo}
                alt="slide_image"
              />
              <button
                onClick={() => handleViewDetails(toy._id)}
                className="bg-green-600 px-2 md:px-8 py-2 md:py-4 md:text-2xl font-bold rounded-2xl absolute top-10 md:top-20 right-10 md:right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500"
              >
                See Details
              </button>
              <h3 className="md:text-6xl font-extrabold text-green-700  absolute bottom-12 md:bottom-28 left-16 md:left-48 animate-pulse bg-gradient-to-br from-slate-300 to-gray-300 p-2 md:p-4 rounded-2xl shadow-2xl shadow-green-500">
                {toy.name}
              </h3>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
    

  );
}

export default Banner;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../assets/slider_1.jpg';
import slide_image_2 from '../../../assets/slider_2.jpg';
import slide_image_3 from '../../../assets/slider_3.jpg';
import slide_image_4 from '../../../assets/slider_4.jpg';
import slide_image_5 from '../../../assets/slider_5.jpg';
import slide_image_6 from '../../../assets/slider_6.jpg';
import slide_image_7 from '../../../assets/slider_7.jpg';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="container my-8 md:my-12" data-aos="zoom-in" data-aos-duration="2000">
      <Swiper
        effect={'coverflow'}
        zoom={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_1} alt="slide_image" />
            <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500'>See Details</Link>
            <h3 className='text-6xl font-extrabold text-green-500  absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_2} alt="slide_image" />
          <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500 '>See Details</Link>
          <h3 className='text-6xl font-extrabold text-green-500 absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_3} alt="slide_image" />
          <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500 '>See Details</Link>
          <h3 className='text-6xl font-extrabold text-green-500 absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_4} alt="slide_image" />
          <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500 '>See Details</Link>
          <h3 className='text-6xl font-extrabold text-green-500 absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
          
        </SwiperSlide>
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_5} alt="slide_image" />
          <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500 '>See Details</Link>
          <h3 className='text-6xl font-extrabold text-green-500 absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_6} alt="slide_image" />
          <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500 '>See Details</Link>
          <h3 className='text-6xl font-extrabold text-green-500 absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
        </SwiperSlide>
        <SwiperSlide className='p-8'>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl shadow-2xl shadow-black hover:scale-105 duration-300' src={slide_image_7} alt="slide_image" />
          <Link className='bg-green-600 px-8 py-4 text-2xl font-bold rounded-2xl absolute top-20 right-44 hover:bg-green-500 duration-300 animate-bounce hover:animate-none hover:shadow-2xl hover:shadow-green-500 '>See Details</Link>
          <h3 className='text-6xl font-extrabold text-green-500 absolute bottom-28 left-48 animate-pulse'>This Is a Super Car</h3>
        </SwiperSlide>

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
  );
}

export default Banner;
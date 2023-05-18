import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';
import slide_image_2 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';
import slide_image_3 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';
import slide_image_4 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';
import slide_image_5 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';
import slide_image_6 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';
import slide_image_7 from '../../../assets/pexels-tetyana-kovyrina-12211.jpg';

function Banner() {
  return (
    <div className="container my-16">
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
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='md:h-[720px] md:w-[1280px] mx-auto rounded-3xl ' src={slide_image_7} alt="slide_image" />
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
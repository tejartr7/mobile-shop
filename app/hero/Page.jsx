'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper/core';
import data from './data';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
const Page = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.update();
    }
  }, [swiper]);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className="swiper-container h-screen relative">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={30}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Ensure autoplay is not disabled on user interaction
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="text-center relative">
            <div className="slide-content h-screen flex items-center justify-center" style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              position: 'relative', // Ensure relative positioning for absolute elements
            }}>
              <div className="w-full lg:w-80 md:w-80 sm:w-90 mx-auto">
                <h1 className="hero-header text-center font-bold font-poppins text-2xl lg:text-left text-white">{item.description}</h1>
              </div>
            </div>
            <div className="swiper-button-next" onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 10, color: 'white', backgroundColor: 'black' }}></div>
            <div className="swiper-button-prev" onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 10, color: 'white', backgroundColor: 'black' }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Page;
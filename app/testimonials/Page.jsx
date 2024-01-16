'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import male from './male.png';
import female from './female.jpg'
import { useState, useEffect } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import data from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale, faStar } from '@fortawesome/free-solid-svg-icons';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ReviewSlider = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper) {
      swiper.update(); // Update Swiper when the component mounts
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
    <section id="reviews" className="swiper-container font-Poppins m-4 p-4" style={{ backgroundColor: '#eeeeee' }}>
      <h1 className="text-2xl font-bold mb-4 text-center lg:pt-5 sm:pt-1" style={{ color: '#192a56' }}>Customer Reviews</h1>
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)} // Set the Swiper instance to state
        slidesPerView={1}
        navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card  text-white p-6 rounded-lg text-center flex flex-col items-center m-2" style={{ backgroundColor: '#0cafe5' }}>
              <Image
                src={review.gender === 'male' ? male : female}
                alt={review.name}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className='flex items-center justify-center text-center'>Rating: {review.rating}</p>
              {/* Inside the ReviewSlider component */}
              <div className="flex items-center justify-center text-center space-x-1">
                {[...Array(review.rating)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className="bg-yellow-500" style={{color:'yellow'}}/>
                ))}
              </div>

              <p className='text-xl'>{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" onClick={handleNext} style={{ position: 'absolute', zIndex: 10, color: 'black', backgroundColor: '#cccccc' }}></div>
        <div className="swiper-button-prev" onClick={handlePrev} style={{ position: 'absolute', zIndex: 10, color: 'black', backgroundColor: '#cccccc' }}></div>
      </Swiper>
    </section>
  );
};

export default ReviewSlider;
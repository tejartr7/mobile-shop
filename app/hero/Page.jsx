'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import data from './data';

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
          <SwiperSlide key={item.id} className="text-center flex items-center justify-center relative">
            <div className="slide-content h-screen" style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white'
            }}>
            </div>
            <div className="absolute left-1/2 lg:left-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 m-4 p-4 lg:ml-4 lg:pl-4 lg:w-1/2 w-full text-blue-500" style={{ left: '50%', color: '#a4c639' }}>
              <h1 className="text-center font-bold font-poppins text-2xl lg:text-left text-white">{item.description}</h1>
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

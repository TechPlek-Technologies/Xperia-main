import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const DualSlider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // IntersectionObserver logic for loading animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.mk-scroll--load').forEach((el) => {
      observer.observe(el);
    });
  }, []);

  // Image load function
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`mk-dual-slider ${isLoaded ? 'loaded' : ''}`}>
      <div className="mk-dual-slider-inner">
        <Swiper
          className="mk-dual-slider-left-holder"
          autoplay={{ delay: 3000 }}
          speed={1000}
          pagination={{ clickable: true }}
          effect="slide"
        >
          <SwiperSlide>
            <ImageSlide
              src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-slide2-1.jpg"
              alt="Slide 1"
              title="Creating next level digital products"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlide
              src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-slide1-1.jpg"
              alt="Slide 2"
              title="Creating impactful web solutions"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ImageSlide
              src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-slide3-1.jpg"
              alt="Slide 3"
              title="Creating dynamic web interactions"
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          className="mk-dual-slider-right-holder"
          autoplay={{ delay: 3000 }}
          speed={1000}
          pagination={{ clickable: true }}
          effect="slide"
        >
          <SwiperSlide>
            <img
              src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-slide2-2.jpg"
              alt="Slide Right 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-slide1-2.jpg"
              alt="Slide Right 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://techpartner.online/orbius/wp-content/uploads/2024/03/home1-slide3-2.jpg"
              alt="Slide Right 3"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const ImageSlide = ({ src, alt, title }) => {
  return (
    <div className="mk-dual-slider-item-inner">
      <div className="mk-dual-slider-image">
        <img
          src={src}
          alt={alt}
          decoding="async"
          fetchpriority="high"
          // onLoad={handleImageLoad}
        />
      </div>
      <div className="mk-dual-slider-content">
        <h4 className="mk-dual-slider-title">{title}</h4>
      </div>
    </div>
  );
};

export default DualSlider;

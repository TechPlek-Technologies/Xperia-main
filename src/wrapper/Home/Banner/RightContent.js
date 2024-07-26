import React from "react";

const RightContent = ({ BannerData }) => {
  return (
    <>
      {BannerData.map((banner, index) => (
        <div key={index} className="mk-dual-slider-item swiper-slide">
          <a href="https://yourdomain.com/about-us">
            <img
              loading="lazy"
              decoding="async"
              width={541}
              height={724}
              src={banner.secondary.main541x724}
              srcset={`
             ${banner.secondary.main541x724} 541w,
             ${banner.secondary.sub224x300} 224w
            `}
              className="attachment-full size-full"
              alt={banner.secondary.name}
              sizes="(max-width: 541px) 100vw, 541px"
            />
          </a>
        </div>
      ))}
    </>
  );
};

export default RightContent;

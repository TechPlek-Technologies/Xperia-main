import React from "react";

const RightContent = ({BannerData}) => {
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
              src={banner.secondary.path}
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

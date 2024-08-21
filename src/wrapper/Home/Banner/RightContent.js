import React from "react";

const RightContent = ({ BannerData }) => {
  return (
    <>
      {BannerData.map((banner, index) => (
        <div key={index} className="mk-dual-slider-item swiper-slide">
          <a href="#">
            <img
              loading="lazy"
              decoding="async"
              width={541}
              height={724}
              src={`${process.env.REACT_APP_API_URL}${banner.banner541x724.url}`}
              srcset={`
             ${process.env.REACT_APP_API_URL}${banner.banner541x724.url} 541w,
             ${process.env.REACT_APP_API_URL}${banner.banner224x300.url} 224w
            `}
              className="attachment-full size-full"
              alt={banner.banner541x724.name}
              sizes="(max-width: 541px) 100vw, 541px"
            />
          </a>
        </div>
      ))}
    </>
  );
};

export default RightContent;

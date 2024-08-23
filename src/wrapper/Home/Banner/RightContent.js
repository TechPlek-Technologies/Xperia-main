import React from "react";

const RightContent = ({ BannerData }) => {
  return (
    <>
      {BannerData.map((banner, index) => {
        const banner541Image = JSON.parse(banner.banner541x724);
        const banner224Image = JSON.parse(banner.banner224x300);

        return (
          <div key={index} className="mk-dual-slider-item swiper-slide">
            <a href="#">
              <img
                loading="lazy"
                decoding="async"
                width={541}
                height={724}
                src={`${process.env.REACT_APP_API_URL}${banner541Image.url}`}
                srcSet={`
                  ${process.env.REACT_APP_API_URL}${banner541Image.url} 541w,
                  ${process.env.REACT_APP_API_URL}${banner224Image.url} 224w
                `}
                className="attachment-full size-full"
                alt={banner541Image.name}
                sizes="(max-width: 541px) 100vw, 541px"
              />
            </a>
          </div>
        );
      })}
    </>
  );
};

export default RightContent;

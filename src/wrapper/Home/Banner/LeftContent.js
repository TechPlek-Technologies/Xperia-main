import React from "react";

const LeftContent = ({ BannerData }) => {
  return (
    <>
      {BannerData.map((banner, index) => (
        <div key={index} className="mk-dual-slider-item swiper-slide">
          <div className="mk-dual-slider-item-inner">
            <div className="mk-dual-slider-image">
              <a href="https://yourdomain.com/about-us">
                <img
                  fetchpriority="high"
                  decoding="async"
                  width={1259}
                  height={724}
                  src={banner.primary.main1259x724}
                  className="attachment-full size-full"
                  alt={banner.primary.name}
                  srcSet={`${banner.primary.main1259x724} 1259w, ${banner.primary.sub300x173} 300w, ${banner.primary.sub1024x589} 1024w, ${banner.primary.sub768x442} 768w`}
                  sizes="(max-width: 1259px) 100vw, 1259px"
                />
              </a>
            </div>
            <div className="mk-dual-slider-content">
              <h4 className="mk-dual-slider-title">
                <a href="https://yourdomain.com/about-us">{banner.text}</a>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftContent;

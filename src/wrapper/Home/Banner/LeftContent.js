import React from "react";

const LeftContent = ({ BannerData }) => {
  return (
    <>
      {BannerData.map((banner, index) => (
        <div key={index} className="mk-dual-slider-item swiper-slide">
          <div className="mk-dual-slider-item-inner">
            <div className="mk-dual-slider-image">
              <a href="#">
                <img
                  fetchpriority="high"
                  decoding="async"
                  width={1259}
                  height={724}
                  src={`${process.env.REACT_APP_API_URL}${banner.main1259x724.url}`}
                  className="attachment-full size-full"
                  alt={banner.main1259x724.name}
                  srcSet={`${process.env.REACT_APP_API_URL}${banner.main1259x724.url} 1259w, ${process.env.REACT_APP_API_URL}${banner.banner224x300.url} 300w, ${process.env.REACT_APP_API_URL}${banner.sub1024x589.url} 1024w, ${process.env.REACT_APP_API_URL}${banner.sub768x442.url} 768w`}
                  sizes="(max-width: 1259px) 100vw, 1259px"
                />
              </a>
            </div>
            <div className="mk-dual-slider-content">
              <h4 className="mk-dual-slider-title">
                <a href="#">{banner.title}</a>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LeftContent;

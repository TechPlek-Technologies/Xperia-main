import React from "react";

const LeftContent = ({ BannerData }) => {
  return (
    <>
      {BannerData.map((banner, index) => {
        const mainImage = JSON.parse(banner.main1259x724);
        const sub1024Image = JSON.parse(banner.sub1024x589);
        const sub768Image = JSON.parse(banner.sub768x442);
        const banner224Image = JSON.parse(banner.banner224x300);

        console.log('Banner Title:', banner.title);

        return (
          <div key={index} className="mk-dual-slider-item swiper-slide">
            <div className="mk-dual-slider-item-inner">
              <div className="mk-dual-slider-image">
                <a href="#">
                  <img
                    fetchpriority="high"
                    decoding="async"
                    width={1259}
                    height={724}
                    src={`${process.env.REACT_APP_API_URL}${mainImage.url}`}
                    className="attachment-full size-full"
                    alt={mainImage.name}
                    srcSet={`${process.env.REACT_APP_API_URL}${mainImage.url} 1259w, ${process.env.REACT_APP_API_URL}${banner224Image.url} 300w, ${process.env.REACT_APP_API_URL}${sub1024Image.url} 1024w, ${process.env.REACT_APP_API_URL}${sub768Image.url} 768w`}
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
        );
      })}
    </>
  );
};

export default LeftContent;

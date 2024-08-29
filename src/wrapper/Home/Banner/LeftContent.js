import React from "react";

const LeftContent = ({ BannerData }) => {
  return (
    <>
      {BannerData && BannerData.map((banner, index) => {
        const mainImage = JSON.parse(banner.main1259x724);
        const sub1024Image = JSON.parse(banner.sub1024x589);
        const sub768Image = JSON.parse(banner.sub768x442);
        const banner224Image = JSON.parse(banner.banner224x300);

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
                    src={`https://xperia.api.regalstyling.com${mainImage.url}`}
                    className="attachment-full size-full"
                    alt={mainImage.name}
                    srcSet={`https://xperia.api.regalstyling.com${mainImage.url} 1259w, https://xperia.api.regalstyling.com${banner224Image.url} 300w, https://xperia.api.regalstyling.com${sub1024Image.url} 1024w, https://xperia.api.regalstyling.com${sub768Image.url} 768w`}
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

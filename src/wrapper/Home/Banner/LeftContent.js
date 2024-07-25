import React from 'react'

const LeftContent = ({BannerData}) => {
  return (
    <>
      {BannerData.map((banner, index) => (
          <div
            key={index}
            className="mk-dual-slider-item swiper-slide"
          >
            <div className="mk-dual-slider-item-inner">
              <div className="mk-dual-slider-image">
                <a href="https://yourdomain.com/about-us">
                  <img
                    fetchpriority="high"
                    decoding="async"
                    width={1259}
                    height={724}
                    src={banner.primary.path}
                    className="attachment-full size-full"
                    alt={banner.primary.name}
                    sizes="(max-width: 1259px) 100vw, 1259px"
                  />
                </a>
              </div>
              <div className="mk-dual-slider-content">
                <h4 className="mk-dual-slider-title">
                  <a href="https://yourdomain.com/about-us">
                    {banner.text}
                  </a>
                </h4>
              </div>
            </div>
          </div>
        ))}
        </>
  )
}

export default LeftContent

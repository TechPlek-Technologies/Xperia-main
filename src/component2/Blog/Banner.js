import React from "react";

const Banner = ({ data }) => {
  return (
    <div
      data-elementor-type="wp-page"
      data-elementor-id={1269}
      className="elementor elementor-1269"
    >
      <div
        className="elementor-element elementor-element-62d9294f e-con-full e-flex e-con e-parent"
        data-id="62d9294f"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
        data-core-v316-plus="true"
      >
        <div
          className="elementor-element elementor-element-860a0d3 elementor-widget__width-inherit mk-image-carousel-slider-g2c-no elementor-widget elementor-widget-mk_image_carousel_slider"
          data-id="860a0d3"
          data-element_type="widget"
          data-settings='{"slides_per_view":"1","slides_per_view_tablet":"1","slides_per_view_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_image_carousel_slider.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-image-carousel-slider-holder">
              <div
                className="swiper swiper-container mk-image-carousel-slider"
                data-settings='{"direction":"horizontal","parallax":"no","effect":"slide","arrows_on":"yes","dots":"","autoplay":"yes","autoplay_speed":5000,"speed":1000,"mousewheel":"no","loop":"yes","slides_to_show":"1","slides_to_show_tablet":"1","slides_to_show_mobile":"1","slider_next":".mk-slider-next","slider_prev":".mk-slider-prev","slider_pagination":".swiper-pagination","centered_slides":"yes","image_spacing":{"unit":"px","size":0,"sizes":[]}}'
                id="swiper-860a0d3"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="swipe-slide-inner">
                      <span>
                        <img
                          fetchpriority="high"
                          decoding="async"
                          width={1840}
                          height={615}
                          src={`https://api.xperiagroup.in${data.bannerImage.url}`}
                          className="attachment-full size-full"
                          alt=""
                          srcSet={`
                                https://api.xperiagroup.in${data.bannerImage.url} 1840w,
                                https://api.xperiagroup.in${data.bannerImage.url} 300w,
                                https://api.xperiagroup.in${data.bannerImage.url} 1024w,
                                https://api.xperiagroup.in${data.bannerImage.url} 768w,
                                https://api.xperiagroup.in${data.bannerImage.url} 1536w
                              `}
                          sizes="(max-width: 1840px) 100vw, 1840px"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

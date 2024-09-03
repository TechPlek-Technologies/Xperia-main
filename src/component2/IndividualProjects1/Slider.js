import React from "react";

const Slider = ({ data }) => {
  const carouselImages = data.carouselImages;

  return (
    <div
      className="elementor-element elementor-element-7b8fead8 e-flex e-con-boxed e-con e-parent"
      data-id="7b8fead8"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-46236af elementor-widget__width-inherit mk-carousel-slider-st1 mk-carousel-slider-content-center elementor-widget elementor-widget-mk_carousel_slider"
          data-id="46236af"
          data-element_type="widget"
          data-settings='{"slides_per_view":"1","slides_per_view_tablet":"1","slides_per_view_mobile":"1","mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_carousel_slider.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-carousel-slider-holder">
              <div
                className="swiper swiper-container mk-carousel-slider"
                data-settings='{"direction":"horizontal","parallax":"no","effect":"slide","arrows_on":"yes","dots":"","autoplay":"yes","autoplay_speed":5000,"speed":1000,"mousewheel":"no","loop":"yes","pause_on_hover":"no","slides_to_show":1,"slides_to_show_tablet":1,"slides_to_show_mobile":1,"slider_next":".mk-slider-next","slider_prev":".mk-slider-prev","slider_pagination":".swiper-pagination","centered_slides":"no","video":"yes","image_spacing":{"unit":"px","size":0,"sizes":[]}}'
                id="swiper-46236af"
              >
                <div className="swiper-wrapper">
                  {carouselImages.map((item, index) => (
                    <div
                      key={index}
                      className="mk-swiper-item swiper-slide size-default"
                    >
                      <div className="mk-carousel-slider-overlay" />
                      <div className="mk-carousel-slider-img-holder">
                        <div className="mk-carousel-slider-img">
                          <img
                            fetchpriority="high"
                            decoding="async"
                            width={1400}
                            height={720}
                            src={`https://api.xperiagroup.in/uploads/${item.file.path}`}
                            className="attachment-full size-full"
                            alt="carousel images"
                            srcSet={`
                              https://api.xperiagroup.in/uploads/${item.file.path}          1400w,
                              https://api.xperiagroup.in/uploads/${item.file.path}   300w,
                              https://api.xperiagroup.in/uploads/${item.file.path} 1024w,
                              https://api.xperiagroup.in/uploads/${item.file.path}   768w
                            `}
                            sizes="(max-width: 1400px) 100vw, 1400px"
                          />
                        </div>
                      </div>
                      <div className="mk-carousel-slider-content-wrap">
                        <div className="mk-carousel-slider-content" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mk-slider-pn mk-slider-prev swiper-46236af-prev swm-hide-mobile">
                  <svg
                    className="swm-svg--arrow swm-svg-filterable-bs-slider-arrow"
                    height={512}
                    viewBox="0 0 24 24"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m4 11.5h14.793l-7.14652-7.14648a.5.5 0 0 1 .707-.707l8 8a.49983.49983 0 0 1 0 .707l-8 8a.5.5 0 0 1 -.707-.707l7.14652-7.14652h-14.793a.5.5 0 0 1 0-1z" />
                  </svg>
                </div>
                <div className="mk-slider-pn mk-slider-next swiper-46236af-next swm-hide-mobile">
                  <svg
                    className="swm-svg--arrow swm-svg-filterable-bs-slider-arrow"
                    height={512}
                    viewBox="0 0 24 24"
                    width={512}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m4 11.5h14.793l-7.14652-7.14648a.5.5 0 0 1 .707-.707l8 8a.49983.49983 0 0 1 0 .707l-8 8a.5.5 0 0 1 -.707-.707l7.14652-7.14652h-14.793a.5.5 0 0 1 0-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

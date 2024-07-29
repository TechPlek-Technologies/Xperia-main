import React from "react";
import TestimonialContent from "./TestimonialContent";
import NextPrev from "./NextPrev";

const Testimonial = () => {
  return (
    <div
      className="elementor-element elementor-element-2971050d e-con-full e-flex e-con e-parent"
      data-id="2971050d"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      data-core-v316-plus="true"
      style={{paddingTop:"0px"}}
    >
      <div
        className="elementor-element elementor-element-35976ff5 e-flex e-con-boxed e-con e-child"
        data-id="35976ff5"
        data-element_type="container"
        data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
      >
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-9e0dc30 elementor-widget elementor-widget-mk_testimonials_slider"
            data-id="9e0dc30"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_testimonials_slider.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-testimonials-slider">
                <span className="mk-testimonials-slider-quote swm-hide-none">
                  <svg
                    className="swm-svg--quote swm-svg-testimonials-quote"
                    enableBackground="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m307.2 174.7 45.1 22.6c-6.2 12.5-11.1 25.6-14.6 39.2-3.5 13.7-5.2 29.6-5.2 47.8v53.1h-75.7v-53.7c0-12.3 2.4-25.2 7.2-38.8s11-26.5 18.6-38.8 15.8-22.8 24.6-31.4zm-97.2 0 45.1 22.6c-6.2 12.5-11.1 25.6-14.6 39.2-3.5 13.7-5.2 29.6-5.2 47.8v53.1h-75.7v-53.7c0-12.3 2.4-25.2 7.2-38.8s11-26.5 18.6-38.8 15.8-22.8 24.6-31.4z" />
                  </svg>
                </span>
                <div
                  className="swiper swiper-container mk-testimonials-slider-content"
                  data-settings='{"arrows_on":"yes","dots":"no","autoplay":"yes","autoplay_speed":5000,"speed":1000,"mousewheel":"no","loop":"yes","pause_on_hover":"no","slider_next":".swiper-9e0dc30-next","slider_prev":".swiper-9e0dc30-prev","slider_pagination":".swiper-9e0dc30-dot"}'
                  id="swiper-9e0dc30"
                >
                  <div className="swiper-wrapper">
                   <TestimonialContent/>
                  </div>
                </div>
                <div className="clear" />
                <NextPrev/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

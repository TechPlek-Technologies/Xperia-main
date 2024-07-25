import React from "react";
import { TestimonialData } from "../../data/home/Data";

const {TestimonialInnerData} = TestimonialData;

const TestimonialContent = () => {
  return (
    <>
      {TestimonialInnerData.map((testimonial, index) => (
        <div className="swiper-slide mk-testimonials-slider-item" key={index}>
          <div className="mk-testimonials-slider-item-wrapper">
            <div className="mk-testimonials-slider-text">
              {testimonial.description}
            </div>
            <div className="mk-testimonials-slider-name-image">
              <div className="mk-testimonials-slider-image swm-hide-mobile">
                <img
                  loading="lazy"
                  decoding="async"
                  width={140}
                  height={140}
                  src={testimonial.logo.path}
                  className="mk-testimonials-face"
                  alt={testimonial.name.toLowerCase()}
                  srcSet={`${
                    testimonial.logo.path
                  } 140w, ${testimonial.logo.path.replace(
                    ".webp",
                    "-100x100.webp"
                  )} 100w`}
                  sizes="(max-width: 140px) 100vw, 140px"
                />
              </div>
              <div className="mk-testimonials-slider-name-section">
                <span className="mk-testimonials-slider-name swm-hide-none">
                  {testimonial.name}
                </span>
                <div className="mk-testimonials-pos-com">
                  <span className="mk-testimonials-slider-position swm-hide-none">
                    {testimonial.designation}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialContent;

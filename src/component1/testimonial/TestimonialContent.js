import React, { useEffect, useState } from "react";
import axios from "axios";


const TestimonialContent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.xperiagroup.in/testimonials/all-testimonial`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data &&
        data.map((testimonial, index) => (
          <div className="swiper-slide mk-testimonials-slider-item" key={index}>
            <div className="mk-testimonials-slider-item-wrapper">
              <div className="mk-testimonials-slider-text">
                {testimonial.shortDescription}
              </div>
              <div className="mk-testimonials-slider-name-image">
                <div className="mk-testimonials-slider-image swm-hide-mobile">
                  <img
                    loading="lazy"
                    decoding="async"
                    width={140}
                    height={140}
                    src={`https://api.xperiagroup.in/${testimonial.iconImage.url}`}
                    className="mk-testimonials-face"
                    alt={testimonial.iconImage.name}
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

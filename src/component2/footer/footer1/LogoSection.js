import React from "react";

const LogoSection = () => {
  return (
    <div
      className="elementor-element elementor-element-7c0296c e-flex e-con-boxed e-con e-child"
      data-id="7c0296c"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
    >
      <div className="e-con-inner">
        <div
          className="mk_sections_item elementor-element elementor-element-49233f8 elementor-widget__width-auto elementor-widget elementor-widget-image"
          data-id="49233f8"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="image.default"
        >
          <div className="elementor-widget-container">
            <a href="https://techpartner.online/orbius/">
              <img
                width={407}
                height={104}
                src="/assets/footer_logo.webp"
                className="attachment-large size-large wp-image-1046"
                alt=""
                srcSet="/assets/footer_logo.webp 407w, /assets/footer_logo.webp"
                sizes="(max-width: 407px) 100vw, 407px"
              />
            </a>
          </div>
        </div>
        <div
          className="mk_sections_item elementor-element elementor-element-3337800 mk-title-align--left elementor-widget elementor-widget-mk_title"
          data-id={3337800}
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_title.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-title mk-title-">
              <div className="mk-title-subtitle swm-hide-none">
                © 2024 Xperia group.
              </div>
              <div className="mk-title-desc swm-hide-none">
                <span>
                  lorem ipsum dolor sit amet consectetur aiscing elitum dolor id
                  quamtis ac varius turpis dignisim usce ullacorper ligula vel
                  odio fermentum nec bibendum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

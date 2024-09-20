import React from "react";
import { domain } from "../../domain";

const Banner = () => {
  return (
    <div
      className="elementor-element elementor-element-1e26d963 e-con-full e-flex e-con e-parent"
      data-id="1e26d963"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      data-core-v316-plus="true"
    >
      <div
        className="elementor-element elementor-element-16238711 elementor-widget elementor-widget-image"
        data-id="16238711"
        data-element_type="widget"
        data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
        data-widget_type="image.default"
      >
        <div className="elementor-widget-container">
          <img
            fetchpriority="high"
            decoding="async"
            width="1840"
            height="473"
            src={`${domain}/assets/img/contact/titlebar.jpg`}
            className="attachment-full size-full wp-image-1156"
            alt=""
            sizes="(max-width: 1840px) 100vw, 1840px"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

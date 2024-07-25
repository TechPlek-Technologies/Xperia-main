import React from "react";
import Style from "./Services.module.css";
import { ServiceData } from "../../data/home/Data";
import { domain } from "../../domain";
import ServiceContent from "./ServiceContent";

const { InnerData } = ServiceData;

export const ServiceItem = ({ item, index }) => {
  const positions = ["start", "middle", "end"];
  const position = positions[index % 3];

  return (
    <div
      className={`mk-moving-services-item-box stack mk-moving-services-item-${position}`}
    >
      <a href={`${domain}${item.slug}`} className="mk-moving-services-link" />
      <article className="mk-moving-services-item">
        <span className="mk-moving-services-counter">{`0${index + 1}`}</span>
        <h4 className="mk-moving-services-title">{item.title}</h4>
        <div className={`mk-moving-services-text ${Style.para}`}>
          {item.para}
        </div>
      </article>
    </div>
  );
};

const Services = () => {
  return (
    <div
      className="elementor-element elementor-element-3263df3f e-con-full e-flex e-con e-parent"
      data-id="3263df3f"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      data-core-v316-plus="true"
    >
      <div
        className="elementor-element elementor-element-6f9680fc elementor-widget elementor-widget-mk_moving_services"
        data-id="6f9680fc"
        data-element_type="widget"
        data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
        data-widget_type="mk_moving_services.default"
      >
        <div className="elementor-widget-container">
          <section
            className="mk-moving-services"
            data-vertical-margin={0}
            data-extra-length={0}
            data-box-margin="20px"
            id="mk-moving-services-6f9680fc"
          >
            <div className="mk-moving-services-heading-mobile">services</div>
            <div className="mk-moving-services-heading-holder">
              <div className="mk-moving-services-heading">
                <span>services</span>
                <span>services</span>
              </div>
            </div>
            <div className="mk-moving-services-items">
              <ServiceContent InnerData={InnerData} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;

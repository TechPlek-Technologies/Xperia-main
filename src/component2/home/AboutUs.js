import React from "react";
import { domain } from "../../domain";

const AboutUs = () => {
  const services = [
    {
      id: "one",
      className: "mk-reveal-services-light",
      href: domain,
      title: "xperia group",
      text: "The mothership, brimming with business ideas, commanding the media landscape with award winning execution case studies across the tapestry of consumer touch-points",
      icon: `${domain}/assets/img/about/120x120/about.webp`,
      iconSrcSet:
        `${domain}/assets/img/about/120x120/about.webp 120w, ${domain}/assets/img/about/100x100/about.webp 100w`,
      iconAlt: "Xperia Group Icon",
      iconSize: 120,
    },
    {
      id: "two",
      className: "mk-reveal-services-light",
      href: domain,
      title: "pencil box",
      text: "Pencil Box, the creative studio, where ideas are hatched, stories are crafted, designs are rendered, and films are made.",
      icon: `${domain}/assets/img/about/120x120/pencilbox.webp`,
      iconSrcSet:
      `${domain}/assets/img/about/120x120/pencilbox.webp 120w, ${domain}/assets/img/about/100x100/pencilbox.webp 100w`,
      iconAlt: "Pencil Box Icon",
      iconSize: 120,
    },
    {
      id: "three",
      className: "mk-reveal-services-light",
      href: domain,
      title: "xperia live",
      text: "Xperia Alive, the pulsating multi-floor studio where we not only blend sound to brand vibes, we also own India’s longest thriving Music IP’s.",
      icon: `${domain}/assets/img/about/120x120/alive.webp`,
      iconSrcSet:
      `${domain}/assets/img/about/120x120/alive.webp 120w, ${domain}/assets/img/about/100x100/alive.webp 100w`,
      iconAlt: "Xperia Live Icon",
      iconSize: 120,
    },
    {
      id: "four",
      className: "mk-reveal-services-dark",
      href: domain,
      title: "who we are",
      text: "/ discover our identity",
      icon: "", // add icon URL if needed
      iconSrcSet: "", // add srcSet if needed
      iconAlt: "", // add alt text if needed
      iconSize: 120, // add size if needed
      textColor: "#fff", // specific text color
    },
  ];
  return (
    <>
      <div
        className="elementor-element elementor-element-11ea414c e-con-full e-flex e-con e-parent"
        data-id="11ea414c"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
        data-core-v316-plus="true"
      >
        <div
          className="elementor-element elementor-element-7269ba1c elementor-widget elementor-widget-mk_reveal_services"
          data-id="7269ba1c"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_reveal_services.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-reveal-services-holder">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`mk-reveal-service-${service.id} mk-reveal-service-item ${service.className}`}
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 0,
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <a href={service.href} className="mk-reveal-service-link"></a>
                  {service.icon && (
                    <div className="mk-reveal-services-icon">
                      <img
                        loading="lazy"
                        decoding="async"
                        width={service.iconSize}
                        height={service.iconSize}
                        src={service.icon}
                        className="attachment-full size-full"
                        alt={service.iconAlt}
                        srcSet={service.iconSrcSet}
                        sizes={`(max-width: ${service.iconSize}px) 100vw, ${service.iconSize}px`}
                      />
                    </div>
                  )}
                  <h4 className="mk-reveal-services-title">{service.title}</h4>
                  <div
                    className="mk-reveal-services-text"
                    style={{ color: service.textColor || "#000" }}
                  >
                    {service.text}
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

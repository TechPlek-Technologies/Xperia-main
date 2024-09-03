import React from "react";
import { domain } from "../../domain";
import { useSelector } from "react-redux";
import FormSection from "./footer/topFooter/sections/FormSection";

const MenuList = () => {
  const menuItems = [
    { url: `${domain}/#about-section`, title: "About Company" },
    { url: `${domain}/blogs`, title: "Blogs" },
    { url: `${domain}/team`, title: "Team" },
    { url: `${domain}/`, title: "Carriers" },
    { url: `${domain}/get-in-touch`, title: "Contact Us" },
  ];
  return (
    <div className="elementor-widget-container">
      <div className="mk-service-list-simple">
        {menuItems.map((item, index) => (
          <div className="mk-service-list-simple-item" key={index}>
            <a href={item.url} />
            <h4 className="mk-service-list-simple-title swm-hide-none">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceList = () => {
  const serviceItems = [
    { src: `${domain}/out-of-home`, name: "Out of Home" },
    { src: `${domain}/multiplex`, name: "Multiplex" },
    { src: `${domain}/cinema-advertising`, name: "Cinema Advertising" },
    { src: `${domain}/events-and-promotions`, name: "Events & Promotions" },
    { src: `${domain}/content-design`, name: "Content Design" },
    { src: `${domain}/creative-retainership`, name: "Creative Retainership" },
    { src: `${domain}/corporate-films`, name: "Corporate Films" },
    { src: `${domain}/music`, name: "Music" },
  ];
  return (
    <div className="elementor-widget-container">
      <div className="mk-service-list-simple">
        {serviceItems.map((item, index) => (
          <div className="mk-service-list-simple-item" key={index}>
            <a href={item.url} />
            <h4 className="mk-service-list-simple-title swm-hide-none">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
const FooterMain = () => {
  const { settingsData } = useSelector((state) => state.settings);

  return (
    settingsData && (
      <footer id="footer" className="footer swm-anim">
        <div
          data-elementor-type="wp-post"
          data-elementor-id={1381}
          className="elementor elementor-1381"
        >
          <div
            className="elementor-element elementor-element-efad11a e-con-full e-flex e-con e-parent"
            data-id="efad11a"
            data-element_type="container"
            data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
            data-core-v316-plus="true"
          >
            <div
              className="elementor-element elementor-element-f3612e8 e-con-full e-flex e-con e-child"
              data-id="f3612e8"
              data-element_type="container"
              data-settings='{"mk_ext_is_sticky":"false"}'
            >
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
                      <a href={domain}>
                        {/* <img
                          width={407}
                          height={104}
                          src={`https://api.xperiagroup.in/${settingsData.footerLogo}`}
                          className="attachment-large size-large wp-image-1046"
                          alt=""
                          srcSet="https://orbius.premiumthemes.in/wp-content/uploads/2024/03/logo-footer.png 407w, https://orbius.premiumthemes.in/wp-content/uploads/2024/03/logo-footer-300x77.png 300w"
                          sizes="(max-width: 407px) 100vw, 407px"
                        />{" "} */}
                        <img
                          width={407}
                          height={104}
                          src={`https://api.xperiagroup.in${
                            settingsData[0]?.footerLogo?.url
                          }`}
                          className="attachment-large size-large wp-image-1046"
                          alt=""
                          srcSet={`https://api.xperiagroup.in${
                            settingsData[0]?.footerLogo?.url
                          } 407w, https://api.xperiagroup.in${
                            settingsData[0]?.footerLogo?.url
                          } 300w`}
                          sizes="(max-width: 407px) 100vw, 407px"
                        />{" "}
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
                          © 2024 Xperia Group.
                        </div>
                        <div className="mk-title-desc swm-hide-none">
                          <span>
                            lorem ipsum dolor sit amet consectetur aiscing
                            elitum dolor id quamtis ac varius turpis dignisim
                            usce ullacorper ligula vel odio fermentum nec
                            bibendum
                          </span>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-28b5e0a e-con-full e-flex e-con e-child"
                data-id="28b5e0a"
                data-element_type="container"
                data-settings='{"mk_ext_is_sticky":"false"}'
              >
                <div
                  className="elementor-element elementor-element-1e20980 e-con-full e-flex e-con e-child"
                  data-id="1e20980"
                  data-element_type="container"
                  data-settings='{"mk_ext_is_sticky":"false"}'
                >
                  <div
                    className="mk_sections_item elementor-element elementor-element-8548df6 mk-title-align--left elementor-widget elementor-widget-mk_title"
                    data-id="8548df6"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="mk-title mk-title-default">
                        <h2 className="mk-title-heading swm-hide-none">
                          <span>useful links</span>
                        </h2>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-d226e69 elementor-widget__width-auto elementor-widget elementor-widget-mk_service_list_simple"
                    data-id="d226e69"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_service_list_simple.default"
                  >
                    <MenuList />
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-a60843e e-con-full e-flex e-con e-child"
                  data-id="a60843e"
                  data-element_type="container"
                  data-settings='{"mk_ext_is_sticky":"false"}'
                >
                  <div
                    className="mk_sections_item elementor-element elementor-element-c17af96 mk-title-align--left elementor-widget elementor-widget-mk_title"
                    data-id="c17af96"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="mk-title mk-title-default">
                        <h2 className="mk-title-heading swm-hide-none">
                          <span>our services</span>
                        </h2>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-868261c elementor-widget__width-auto elementor-widget elementor-widget-mk_service_list_simple"
                    data-id="868261c"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_service_list_simple.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="mk-service-list-simple">
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/out-of-home`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Out of Home
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/multiplex`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Multiplex
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/cinema-advertising`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Cinema Advertising
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/events-and-promotions`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Events & Promotions
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/content-design`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Content Design
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/creative-retainership`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Creative Retainership
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/corporate-films`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Corporate Films
                          </h4>
                        </div>
                        <div className="mk-service-list-simple-item">
                          <a href={`${domain}/music`} />
                          <h4 className="mk-service-list-simple-title swm-hide-none">
                            Music
                          </h4>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-044ea48 e-con-full e-flex e-con e-child"
                  data-id="044ea48"
                  data-element_type="container"
                  data-settings='{"mk_ext_is_sticky":"false"}'
                >
                  <div
                    className="mk_sections_item elementor-element elementor-element-387d6f7 mk-title-align--left elementor-widget elementor-widget-mk_title"
                    data-id="387d6f7"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="mk-title mk-title-default">
                        <h2 className="mk-title-heading swm-hide-none">
                          <span>Have a project in mind?</span>
                        </h2>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-d46335d elementor-widget__width-auto elementor-widget elementor-widget-mk_service_list_simple"
                    data-id="d46335d"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_service_list_simple.default"
                  >
                    <FormSection/>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-b692e6b e-con-full e-flex e-con e-child"
              data-id="b692e6b"
              data-element_type="container"
              data-settings='{"mk_ext_is_sticky":"false"}'
            >
              <div
                className="mk_sections_item elementor-element elementor-element-03af58c elementor-widget__width-auto mk-title-align--left elementor-widget elementor-widget-mk_title"
                data-id="03af58c"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="mk_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="mk-title mk-title-default">
                    <div className="mk-title-subtitle swm-hide-none">
                      call our office
                    </div>
                    <h2 className="mk-title-heading swm-hide-none">
                      <span>
                        <a href={`tel:+91${ settingsData[0]?.phoneNumber}`}>{settingsData[0]?.phoneNumber}</a>
                      </span>
                    </h2>
                  </div>{" "}
                </div>
              </div>
              <div
                className="mk_sections_item elementor-element elementor-element-1622054 elementor-widget__width-auto mk-title-align--left elementor-widget elementor-widget-mk_title"
                data-id={1622054}
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="mk_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="mk-title mk-title-default">
                    <div className="mk-title-subtitle swm-hide-none">
                      send a message
                    </div>
                    <h2 className="mk-title-heading swm-hide-none">
                      <span>
                        <a href={`mailto:${settingsData?.email}`}>{settingsData[0]?.email}</a>
                      </span>
                    </h2>
                  </div>{" "}
                </div>
              </div>
              <div
                className="mk_sections_item elementor-element elementor-element-b8e5dd5 elementor-widget__width-auto mk-title-align--left elementor-widget elementor-widget-mk_title"
                data-id="b8e5dd5"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="mk_title.default"
              >
                <div className="elementor-widget-container">
                  <div className="mk-title mk-title-default">
                    <div className="mk-title-subtitle swm-hide-none">
                      our address
                    </div>
                    <h2 className="mk-title-heading swm-hide-none">
                      <span>{settingsData[0]?.address}</span>
                    </h2>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default FooterMain;

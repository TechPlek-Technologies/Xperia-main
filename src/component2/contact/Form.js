import React from "react";
import { domain } from "../../domain";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Form = () => {
  const { settingsData } = useSelector((state) => state.settings);

  const socialMediaIcons = [
    {
      link: settingsData?.instagram,
      icon: "fab fa-instagram",
    },
    {
      link: settingsData?.facebook,
      icon: "fa-brands fa-facebook-f",
    },
    {
      link: settingsData?.x,
      icon: "fa-brands fa-linkedin",
    },
    {
      link: settingsData?.youtube,
      icon: "fa-brands fa-youtube",
    },
  ];
  return (
    <div
      className="elementor-element elementor-element-74f02eb9 e-flex e-con-boxed e-con e-parent"
      data-id="74f02eb9"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      data-core-v316-plus="true"
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-4d60d0e e-con-full e-flex e-con e-child"
          data-id="4d60d0e"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-1ae184b3 e-flex e-con-boxed e-con e-child"
            data-id="1ae184b3"
            data-element_type="container"
            data-settings='{"mk_ext_is_sticky":"false"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-37dedea elementor-widget elementor-widget-image"
                data-id="37dedea"
                data-element_type="widget"
                data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <img
                    decoding="async"
                    width={605}
                    height={605}
                    src={`${domain}/assets/img/contact/contact-us.jpg`}
                    className="attachment-full size-full wp-image-1231"
                    alt=""
                    sizes="(max-width: 605px) 100vw, 605px"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-3d6566e e-flex e-con-boxed e-con e-child"
            data-id="3d6566e"
            data-element_type="container"
            data-settings='{"mk_ext_is_sticky":"false"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-4c0ba854 e-flex e-con-boxed e-con e-child"
                data-id="4c0ba854"
                data-element_type="container"
                data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-f1833db mk-title-align--center elementor-widget elementor-widget-mk_title"
                    data-id="f1833db"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_title.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="mk-title mk-title-default">
                        <h2 className="mk-title-heading swm-hide-none">
                          <span>follow us</span>
                        </h2>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-695ee5c9 elementor-icon-list--layout-inline elementor-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="695ee5c9"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items elementor-inline-items">
                        {socialMediaIcons.map((icons, index) => (
                          <li
                            className="elementor-icon-list-item elementor-inline-item"
                            key={index}
                          >
                            <a href={icons.link}>
                              <span className="elementor-icon-list-icon">
                                <i className={icons.icon}></i>
                              </span>
                            </a>
                          </li>
                        ))}
                    
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-1ae04363 e-con-full e-flex e-con e-child"
          data-id="1ae04363"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-311434bf mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="311434bf"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-default">
                <h2 className="mk-title-heading swm-hide-none">
                  <span>get in touch</span>
                </h2>
                <div className="mk-title-desc swm-hide-none">
                  <span>
                    take the first step and get in touch with us today
                  </span>
                </div>
              </div>{" "}
            </div>
          </div>
          <div
            className="elementor-element elementor-element-535e4ee5 mk-cf7-style-underline mk-cf7-check-no mk-cf7-button-left mk-cf7-hide-button-text-no mk-cf7-highlight-style-default mk-cf7-highlight-no elementor-widget elementor-widget-mk_contact_form_styler"
            data-id="535e4ee5"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_contact_form_styler.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-cf7-container mk-cf7-btn-abs-no">
                <div className="mk-cf7 mk-cf7-style elementor-clickable">
                  <div
                    className="wpcf7 js"
                    id="wpcf7-f1378-p1266-o2"
                    lang="en-US"
                    dir="ltr"
                  >
                    <div className="screen-reader-response">
                      <p role="status" aria-live="polite" aria-atomic="true" />{" "}
                      <ul />
                    </div>
                    <form
                      action="/contact/#wpcf7-f1378-p1266-o2"
                      method="post"
                      className="wpcf7-form init"
                      aria-label="Contact form"
                      noValidate="novalidate"
                      data-status="init"
                    >
                      <div style={{ display: "none" }}>
                        <input
                          type="hidden"
                          name="_wpcf7"
                          defaultValue={1378}
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_version"
                          defaultValue="5.9.3"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_locale"
                          defaultValue="en_US"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_unit_tag"
                          defaultValue="wpcf7-f1378-p1266-o2"
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_container_post"
                          defaultValue={1266}
                        />
                        <input
                          type="hidden"
                          name="_wpcf7_posted_data_hash"
                          defaultValue=""
                        />
                      </div>
                      <p>
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-name"
                        >
                          <input
                            size={40}
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="your name"
                            defaultValue=""
                            type="text"
                            name="your-name"
                          />
                        </span>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-email"
                        >
                          <input
                            size={40}
                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="email"
                            defaultValue=""
                            type="email"
                            name="your-email"
                          />
                        </span>
                        <br />
                        <span
                          className="wpcf7-form-control-wrap"
                          data-name="your-message"
                        >
                          <textarea
                            cols={40}
                            rows={10}
                            className="wpcf7-form-control wpcf7-textarea"
                            aria-invalid="false"
                            placeholder="your message"
                            name="your-message"
                            defaultValue={""}
                          />
                        </span>
                        <br />
                        <button
                          className="wpcf7-form-control wpcf7-submit swm-cf7-button"
                          type="submit"
                        >
                          <span className="swm-cf7-btn-text">submit</span>
                          <span className="swm-cf7-btn-icon">
                            <svg
                              className="swm-svg--arrow swm-svg-contact-btn-arrow"
                              height={512}
                              viewBox="0 0 24 24"
                              width={512}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m4 11.5h14.793l-7.14652-7.14648a.5.5 0 0 1 .707-.707l8 8a.49983.49983 0 0 1 0 .707l-8 8a.5.5 0 0 1 -.707-.707l7.14652-7.14652h-14.793a.5.5 0 0 1 0-1z" />
                            </svg>
                          </span>
                        </button>
                      </p>
                      <div
                        className="wpcf7-response-output"
                        aria-hidden="true"
                      />
                    </form>
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

export default Form;

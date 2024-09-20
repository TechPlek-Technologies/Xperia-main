import React from "react";
import WrapperCloseButton from "./icons/WrapperCloseButton";
import WrapperOpenButton from "./icons/WrapperOpenButton";
import WrapperLogo from "./WrapperLogo";
import WrapperMenu from "./WrapperMenu";
import WrapperFooter from "./WrapperFooter";
import MediaLinks from "./MediaLinks";
import WrapperContent from "./WrapperContent";
import FooterLogo from "./FooterLogo";
import SidebarFooter from "./SidebarFooter";

const OuterWrapper = ({settingsData}) => {
  return (
   <>
   <div className="swm-btt-btn swm-btt-btn-dark">
          <svg
            className="swm-svg--arrow swm-svg-btt-btn-arrow"
            height={512}
            viewBox="0 0 24 24"
            width={512}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m4 11.5h14.793l-7.14652-7.14648a.5.5 0 0 1 .707-.707l8 8a.49983.49983 0 0 1 0 .707l-8 8a.5.5 0 0 1 -.707-.707l7.14652-7.14652h-14.793a.5.5 0 0 1 0-1z" />
          </svg>
        </div>
        <div className="mk-off-canvas-overlay mk-off-canvas-id-3e0e2cb8" />{" "}
        <div
          className="mk-off-canvas mk-off-canvas-3e0e2cb8 mk-off-canvas-right"
          data-esckey="yes"
          data-offcanvas-id="offcanvas-custom-1389"
          data-widget-id="3e0e2cb8"
        >
          <div className="swm-off-canvas-wrap">
            <div className="mk-off-canvas-close mk-icon">
              <a href="#">
                <svg
                  className="swm-svg--close-alt swm-svg-off-canvas-close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 47.971 47.971"
                  style={{ enableBackground: "new 0 0 47.971 47.971" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </a>
            </div>
            <div
              data-elementor-type="wp-post"
              data-elementor-id={1389}
              className="elementor elementor-1389"
            >
              <div
                className="elementor-element elementor-element-6be15493 elementor-hidden-desktop e-flex e-con-boxed e-con e-parent"
                data-id="6be15493"
                data-element_type="container"
                data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
              >
                <div className="e-con-inner">
                  <div
                    className="mk_sections_item elementor-element elementor-element-6f4facf8 elementor-widget elementor-widget-image"
                    data-id="6f4facf8"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="image.default"
                  >
                    <WrapperLogo settingsData={settingsData[0]} />
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-caee1ca elementor-widget__width-inherit elementor-widget elementor-widget-mk_vertical_menu"
                    data-id="caee1ca"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_vertical_menu.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="mk-vertical-menu-container">
                        <div className="mk-ver-menu-wrap">
                          <div className="menu-main-navigation-container">
                            <ul
                              id="menu-main-navigation-1"
                              className="mk-ver-menu"
                            >
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1965">
                                <a href="/">home</a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1965">
                                <a href="/projects">projects</a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1993">
                                <a href="#">
                                  about
                                  <svg
                                    className="swm-svg--angle swm-svg-submenu-indicator"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{
                                      enableBackground: "new 0 0 512 512",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z" />
                                  </svg>
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1983">
                                    <a href="/xperia-group">xperia group</a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1967">
                                    <a href="/pencil-box">pencil box</a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1966">
                                    <a href="/xperia-alive">xperia alive</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1995">
                                <a href="#">
                                  services
                                  <svg
                                    className="swm-svg--angle swm-svg-submenu-indicator"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{
                                      enableBackground: "new 0 0 512 512",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z" />
                                  </svg>
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1968">
                                    <a href="/out-of-home">out of home</a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1988">
                                    <a href="/multiplex">
                                      cinema advertisement
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1969">
                                    <a href="/events-and-promotions">
                                      events and promotions
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2244">
                                    <a href="/content-design">content design</a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2244">
                                    <a href="/creative-retainership">
                                      creative retainership
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2244">
                                    <a href="/corporate-films">
                                      corporate films
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-2244">
                                    <a href="/music">music</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1970">
                                <a href="/team">team</a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1970">
                                <a href="/blogs">blog</a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1995">
                                <a href="#">
                                  contact
                                  <svg
                                    className="swm-svg--angle swm-svg-submenu-indicator"
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{
                                      enableBackground: "new 0 0 512 512",
                                    }}
                                    xmlSpace="preserve"
                                  >
                                    <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z" />
                                  </svg>
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1968">
                                    <a href="/locations">locations</a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1988">
                                    <a href="/get-in-touch">get in touch</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-10f62e99 mk-title-align--left elementor-widget elementor-widget-mk_title"
                    data-id="10f62e99"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_title.default"
                  >
                    <WrapperFooter settingsData={settingsData[0]} />
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-2942f901 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="2942f901"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="icon-list.default"
                  >
                    <MediaLinks settingsData={settingsData[0]} />
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5455a342 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
                data-id="5455a342"
                data-element_type="container"
                data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
              >
                <div className="e-con-inner">
                  <div
                    className="mk_sections_item elementor-element elementor-element-7ac392e elementor-widget elementor-widget-image"
                    data-id="7ac392e"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="image.default"
                  >
                    <WrapperLogo settingsData={settingsData[0]} />
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-39d5c41f mk-title-align--left elementor-widget elementor-widget-mk_title"
                    data-id="39d5c41f"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="mk_title.default"
                  >
                    <WrapperContent settingsData={settingsData[0]} />
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-cf6193d elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="cf6193d"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="icon-list.default"
                  >
                    <MediaLinks settingsData={settingsData[0]} />
                  </div>
                  <div
                    className="mk_sections_item elementor-element elementor-element-5e0ec20c elementor-widget elementor-widget-image"
                    data-id="5e0ec20c"
                    data-element_type="widget"
                    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                    data-widget_type="image.default"
                  >
                    <FooterLogo settingsData={settingsData[0]} />
                  </div>
                  <WrapperFooter settingsData={settingsData[0]} />
                </div>
              </div>
            </div>
          </div>
        </div>
   </>
  );
};

export default OuterWrapper;

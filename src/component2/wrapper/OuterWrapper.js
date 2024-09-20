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
   <WrapperOpenButton/>

      <div className="mk-off-canvas-overlay mk-off-canvas-id-14fd32dc" />

      <div
        className="mk-off-canvas mk-off-canvas-14fd32dc mk-off-canvas-right"
        data-esckey="yes"
        data-offcanvas-id="offcanvas-custom-1389"
        data-widget-id="14fd32dc"
      >
        <div className="swm-off-canvas-wrap">
         <WrapperCloseButton/>
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
              data-core-v316-plus="true"
            >
              <div className="e-con-inner">
                <div
                  className="mk_sections_item elementor-element elementor-element-6f4facf8 elementor-widget elementor-widget-image"
                  data-id="6f4facf8"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="image.default"
                >
                  <WrapperLogo settingsData={settingsData}/>
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
                                <a href="/">
                                  home
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1965">
                                <a href="/projects">
                                  projects
                                </a>
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
                                    <a href="/xperia-group">
                                   xperia group
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1967">
                                    <a href="/pencil-box">
                                    pencil box
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1966">
                                    <a href="/xperia-alive">
                                    xperia alive
                                    </a>
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
                                    <a href="/out-of-home">
                                    out of home
                                    </a>
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
                                    <a href="/content-design">
                                    content design
                                    </a>
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
                                    <a href="/music">
                                    music
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1970">
                                <a href="/team">
                                  team
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1970">
                                <a href="/blogs">
                                  blog
                                </a>
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
                                    <a href="/locations">
                                    locations
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1988">
                                    <a href="/get-in-touch">
                                    get in touch
                                    </a>
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
                  <WrapperFooter settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-2942f901 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="2942f901"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="icon-list.default"
                >
                  <MediaLinks settingsData={settingsData}/>
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-5455a342 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
              data-id="5455a342"
              data-element_type="container"
              data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
              data-core-v316-plus="true"
            >
              <div className="e-con-inner">
                <div
                  className="mk_sections_item elementor-element elementor-element-7ac392e elementor-widget elementor-widget-image"
                  data-id="7ac392e"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="image.default"
                >
                  <WrapperLogo settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-39d5c41f mk-title-align--left elementor-widget elementor-widget-mk_title"
                  data-id="39d5c41f"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="mk_title.default"
                >
                  <WrapperContent settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-cf6193d elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="cf6193d"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="icon-list.default"
                >
                 <MediaLinks settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-5e0ec20c elementor-widget elementor-widget-image"
                  data-id="5e0ec20c"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="image.default"
                >
                 <WrapperLogo settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-276d74f6 mk-title-align--left elementor-widget elementor-widget-mk_title"
                  data-id="276d74f6"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="mk_title.default"
                >
                 <WrapperFooter settingsData={settingsData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mk-off-canvas-overlay mk-off-canvas-id-3e0e2cb8" />

      <div
        className="mk-off-canvas mk-off-canvas-3e0e2cb8 mk-off-canvas-right"
        data-esckey="yes"
        data-offcanvas-id="offcanvas-custom-1389"
        data-widget-id="3e0e2cb8"
      >
        <div className="swm-off-canvas-wrap">
        <WrapperCloseButton/>
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
              data-core-v316-plus="true"
            >
              <div className="e-con-inner">
                <div
                  className="mk_sections_item elementor-element elementor-element-6f4facf8 elementor-widget elementor-widget-image"
                  data-id="6f4facf8"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="image.default"
                >
                 <WrapperLogo settingsData={settingsData}/>
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
                          <WrapperMenu/>
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
                 <WrapperFooter settingsData={settingsData} />
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-2942f901 elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="2942f901"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="icon-list.default"
                >
                <MediaLinks settingsData={settingsData} />
                </div>
              </div>
            </div>

            <div
              className="elementor-element elementor-element-5455a342 elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
              data-id="5455a342"
              data-element_type="container"
              data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
              data-core-v316-plus="true"
            >
              <div className="e-con-inner">
                <div
                  className="mk_sections_item elementor-element elementor-element-7ac392e elementor-widget elementor-widget-image"
                  data-id="7ac392e"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="image.default"
                >
                <WrapperLogo settingsData={settingsData} />
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-39d5c41f mk-title-align--left elementor-widget elementor-widget-mk_title"
                  data-id="39d5c41f"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="mk_title.default"
                >
            <WrapperContent settingsData={settingsData} />
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-cf6193d elementor-icon-list--layout-inline elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="cf6193d"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="icon-list.default"
                >
                  <MediaLinks settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-5e0ec20c elementor-widget elementor-widget-image"
                  data-id="5e0ec20c"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="image.default"
                >
                  <FooterLogo settingsData={settingsData}/>
                </div>
                <div
                  className="mk_sections_item elementor-element elementor-element-276d74f6 mk-title-align--left elementor-widget elementor-widget-mk_title"
                  data-id="276d74f6"
                  data-element_type="widget"
                  data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
                  data-widget_type="mk_title.default"
                >
                  <SidebarFooter settingsData={settingsData}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OuterWrapper;

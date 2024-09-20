import React from "react";
import OuterWrapper from "./OuterWrapper";
import Header from "../header/Header";
import { Footer } from "../../component/footer/Footer";
import { ResponsiveFooter } from "../../component/footer/responsive/Footer";
import { useSelector } from "react-redux";
import FooterLogo from "./FooterLogo";
import WrapperFooter from "./WrapperFooter";
import MediaLinks from "./MediaLinks";
import WrapperContent from "./WrapperContent";
import WrapperLogo from "./WrapperLogo";
import WrapperMenu from "./WrapperMenu";

const Layout = ({ children, type }) => {
  const [screenSize, setScreenSize] = React.useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  React.useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const { loading, settingsData, error } = useSelector(
    (state) => state.settings
  );

  return (
    <>
   {  settingsData && <div id="swm-page">
        <div id="swm-outer-wrap" className="clear">
          <div id="swm-wrap" className="clear">
            <Header type={type} settingsData={settingsData[0]} />



            <div
              id="content"
              className="swm-main-container swm-site-content swm-anim"
            >
              <div className="swm_site_content_wrap swm-container" />
              <div
                data-elementor-type="wp-page"
                data-elementor-id={1255}
                className="elementor elementor-1255"
              >
                {children}
              </div>
              <div className="clear" />
            </div>
         
            {screenSize.width <= 880 ? (
              <ResponsiveFooter settingsData={settingsData[0]} />
            ) : (
              <Footer settingsData={settingsData[0]} />
            )}
            {/* <FooterMain/> */}
          </div>
          {/* #swm-wrap */}
        </div>
        {/* #swm-outer-wrap */}
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
                 <WrapperMenu/>
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
      </div>}
      {/* end #swm-page */}
    </>
  );
};

export default Layout;

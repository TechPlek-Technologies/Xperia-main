import React from "react";
import OuterWrapper from "./OuterWrapper";
import Header from "../header/Header";
import { Footer } from "../../component/footer/Footer";
import { ResponsiveFooter } from "../../component/footer/responsive/Footer";
import { useSelector } from "react-redux";

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

  const { settingsData } = useSelector((state) => state.settings);
  console.log(settingsData);
  return (
    <>
      <div id="swm-page">
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
            {/* .swm-main-container */}
            {/* {<Footer/>} */}
            {/* <Footer/> */}
            {screenSize.width <= 880 ? (
              <ResponsiveFooter settingsData={settingsData[0]} />
            ) : (
              <Footer settingsData={settingsData[0]} />
            )}
          </div>
          {/* #swm-wrap */}
        </div>
        {/* #swm-outer-wrap */}
        {<OuterWrapper settingsData={settingsData[0]} />}
      </div>
      {/* end #swm-page */}
    </>
  );
};

export default Layout;

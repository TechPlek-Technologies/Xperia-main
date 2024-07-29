import React from 'react'
import OuterWrapper from './OuterWrapper'
// import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Footer } from '../../component/footer/Footer'
import { ResponsiveFooter } from '../../component/footer/responsive/Footer'
// import { Footer } from '../../component/layout/footer/Footer'

const Layout = ({ children }) => {
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
  return (
    <>

    <div id="swm-page">
      <div id="swm-outer-wrap" className="clear">
        <div id="swm-wrap" className="clear">
          <Header/>
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
          {screenSize.width <= 880 ? <ResponsiveFooter/> : <Footer />}
        </div>
        {/* #swm-wrap */}
      </div>
      {/* #swm-outer-wrap */}
     {<OuterWrapper/>}
    </div>
    {/* end #swm-page */}
  </>
  
  )
}

export default Layout
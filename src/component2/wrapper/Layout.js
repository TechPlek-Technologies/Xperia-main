import React from 'react'
import OuterWrapper from './OuterWrapper'
import Footer from '../footer/Footer'
import Header from '../header/Header'
// import { Footer } from '../../component/layout/footer/Footer'

const Layout = ({ children }) => {
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
          <Footer/>
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
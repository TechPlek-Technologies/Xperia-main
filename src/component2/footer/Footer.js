import React from 'react'
import Footer1 from './footer1/Footer1'
import Footer2 from './footer2/Footer2'

const Footer = () => {
  return (
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
        <Footer1/>
        <Footer2/>
       
       
      </div>
    </div>
  </footer>
  
  )
}

export default Footer
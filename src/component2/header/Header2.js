import React from 'react'
import LogoSection from './customHeader/LogoSection'
import Menu from './customHeader/Menu'
import Sidebar from './customHeader/Sidebar'

const Header2 = ({menuItems}) => {
  return (
    <header className="swm_header_custom_section" id="swm-header">
    <div
      data-elementor-type="wp-post"
      data-elementor-id={1383}
      className="elementor elementor-1383"
    >
      <div
        className="elementor-element elementor-element-798ba576 e-con-full e-flex e-con e-parent"
        data-id="798ba576"
        data-element_type="container"
        data-settings='{"background_background":"classic","mk_ext_is_sticky":"false"}'
      >
        <div
          className="elementor-element elementor-element-25d65397 e-con-full e-flex e-con e-child"
          data-id="25d65397"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
           <LogoSection/>
            <Menu menuItems={menuItems} />
            <Sidebar/>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header2
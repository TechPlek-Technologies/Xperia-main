import React from 'react'

const MainWrapper = ({children}) => {
  return (
    <div
    className="elementor-element elementor-element-10ce79da e-con-full e-flex e-con e-parent"
    data-id="10ce79da"
    data-element_type="container"
    data-settings='{"animation":"none","mk_ext_is_sticky":"false"}'
    data-core-v316-plus="true"
  >
    <div
      className="elementor-element elementor-element-66c26bca elementor-widget elementor-widget-mk_dual_slider"
      data-id="66c26bca"
      data-element_type="widget"
      data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
      data-widget_type="mk_dual_slider.default"
    >
      <div className="elementor-widget-container">
        <div className="mk-dual-slider mk-dual-slider-autoplay-yes mk-scroll--load">
          <div className="mk-dual-slider-top">
            <div className="mk-dual-slider-content-large swm-hide-none" />
          </div>
          <div className="mk-dual-slider-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainWrapper

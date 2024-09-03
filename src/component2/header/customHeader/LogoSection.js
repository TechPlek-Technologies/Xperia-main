import React from 'react'

const LogoSection = ({settingsData}) => {
  return (
    <div
    className="mk_sections_item elementor-element elementor-element-24071b19 elementor-widget elementor-widget-image"
    data-id="24071b19"
    data-element_type="widget"
    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
    data-widget_type="image.default"
  >
    <div className="elementor-widget-container">
      <a href="/">
        <img
          src={`https://api.xperiagroup.in${JSON.parse(settingsData?.navbarLogo)?.url}`}
          className="attachment-full size-full wp-image-1118"
          alt="navbar logo"
          style={{ width: "228px" }}
        />
      </a>
    </div>
  </div>
  )
}

export default LogoSection

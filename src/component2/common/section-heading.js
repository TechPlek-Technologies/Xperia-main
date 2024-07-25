import React from 'react'

const SectionHeading = ({title,subTitle}) => {
  return (
    <>
    <div
  className="elementor-element elementor-element-559292e9 e-con-full e-flex e-con e-parent"
  data-id="559292e9"
  data-element_type="container"
  data-settings='{"mk_ext_is_sticky":"false"}'
  data-core-v316-plus="true"
>
  <div
    className="elementor-element elementor-element-5fd982dd elementor-widget elementor-widget-mk_section_heading"
    data-id="5fd982dd"
    data-element_type="widget"
    data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
    data-widget_type="mk_section_heading.default"
  >
    <div className="elementor-widget-container">
      <div className="mk-section-heading">
        <h4 className="mk-section-heading-title">
          <span>{title}</span>
        </h4>
        <span className="mk-section-heading-subtitle swm-hide-tablet">
          / {subTitle}
        </span>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SectionHeading;
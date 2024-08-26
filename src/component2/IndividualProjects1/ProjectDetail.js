import React from 'react'

const ProjectDetail = ({data,title}) => {
  return (
    <div
    className="elementor-element elementor-element-271f502a e-flex e-con-boxed e-con e-parent"
    data-id="271f502a"
    data-element_type="container"
    data-settings='{"mk_ext_is_sticky":"false"}'
  >
    <div className="e-con-inner">
      <div
        className="elementor-element elementor-element-604d24bd e-con-full e-flex e-con e-child"
        data-id="604d24bd"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      >
        <div
          className="elementor-element elementor-element-5ea6c455 mk-title-align--left elementor-widget elementor-widget-mk_title"
          data-id="5ea6c455"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_title.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-title mk-title-">
              <div className="mk-title-desc swm-hide-none">
                <span>
                 {data.projectOverview}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-234946e3 e-con-full e-flex e-con e-child"
        data-id="234946e3"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      >
        <div
          className="elementor-element elementor-element-3d7e6fc3 mk-title-align--left elementor-widget elementor-widget-mk_title"
          data-id="3d7e6fc3"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_title.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-title mk-title-default">
              <h2 className="mk-title-heading swm-hide-none">
                <span>Project Overview</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectDetail
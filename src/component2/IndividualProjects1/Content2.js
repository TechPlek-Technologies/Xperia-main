import React from "react";

const Content2 = ({ data }) => {
  return (
    <div
      className="elementor-element elementor-element-6d8ea567 e-flex e-con-boxed e-con e-parent"
      data-id="6d8ea567"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-6e59a3ba e-con-full e-flex e-con e-child"
          data-id="6e59a3ba"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-60dff0e4 mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="60dff0e4"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-">
                <div className="mk-title-subtitle swm-hide-none">
                  {data.title4}
                </div>
                <div className="mk-title-desc swm-hide-none">
                  <span>{data.content4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-2ec6c749 e-con-full e-flex e-con e-child"
          data-id="2ec6c749"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-138e88ed mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="138e88ed"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-">
                <div className="mk-title-subtitle swm-hide-none">
                  {data.title5}
                </div>
                <div className="mk-title-desc swm-hide-none">
                  <span>{data.content5}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
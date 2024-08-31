import React from "react";

const Description = ({ data }) => {
  return (
    <div
      className="elementor-element elementor-element-1a06d122 e-flex e-con-boxed e-con e-parent"
      data-id="1a06d122"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-12cfd6ec e-con-full e-flex e-con e-child"
          data-id="12cfd6ec"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-1d5b39fe elementor-widget__width-initial mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="1d5b39fe"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-">
                <div className="mk-title-subtitle swm-hide-none">
                  publish date
                </div>
                <div className="mk-title-desc swm-hide-none">
                  <span>{data.publishDate}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-60f0c1fd elementor-widget__width-initial elementor-widget-tablet__width-initial mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="60f0c1fd"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-">
                <div className="mk-title-subtitle swm-hide-none">
                  project type
                </div>
                <div className="mk-title-desc swm-hide-none">
                  <span>{data.category}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-1693b40b elementor-widget__width-initial mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="1693b40b"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-">
                <div className="mk-title-subtitle swm-hide-none">client</div>
                <div className="mk-title-desc swm-hide-none">
                  <span>{data.companyName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-7ca40f3 e-con-full e-flex e-con e-child"
          data-id="7ca40f3"
          data-element_type="container"
          data-settings='{"mk_ext_is_sticky":"false"}'
        >
          <div
            className="elementor-element elementor-element-45723ff5 mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="45723ff5"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-default">
                <h2 className="mk-title-heading swm-hide-none">
                  <span>
                    Company Overview
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-4a8d2927 mk-title-align--left elementor-widget elementor-widget-mk_title"
            data-id="4a8d2927"
            data-element_type="widget"
            data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
            data-widget_type="mk_title.default"
          >
            <div className="elementor-widget-container">
              <div className="mk-title mk-title-">
                <div className="mk-title-desc swm-hide-none">
                  <span>
                    {data.companyOverview}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

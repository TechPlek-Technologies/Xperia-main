import React from "react";

const WrapperFooter = ({settingsData}) => {
  return (
    <div
      className="mk_sections_item elementor-element elementor-element-10f62e99 mk-title-align--left elementor-widget elementor-widget-mk_title"
      data-id="10f62e99"
      data-element_type="widget"
      data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
      data-widget_type="mk_title.default"
    >
      <div className="elementor-widget-container">
        <div className="mk-title mk-title-">
          <div className="mk-title-desc swm-hide-none">
            <span>
              {settingsData?.address}
              <br />
              {settingsData?.phoneNumber}
              <br />
              {settingsData?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapperFooter;

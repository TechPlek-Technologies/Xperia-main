import React from "react";
import { useSelector } from "react-redux";

const LocationContent = () => {
  const { settingsData } = useSelector((state) => state.settings);
  console.log("settingsData", settingsData);
  return (
    <div
      className="elementor-element elementor-element-2d046a59 e-con-full e-flex e-con e-parent"
      data-id="2d046a59"
      data-element_type="container"
      data-settings='{"mk_ext_is_sticky":"false"}'
      data-core-v316-plus="true"
    >
      <div
        className="elementor-element elementor-element-29d6bb02 e-con-full e-flex e-con e-child"
        data-id="29d6bb02"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      ></div>
      <div
        className="elementor-element elementor-element-26b21fe6 e-con-full e-flex e-con e-child"
        data-id="26b21fe6"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
      >
        <div
          className="elementor-element elementor-element-1a9af371 mk-title-align--left elementor-widget elementor-widget-mk_title"
          data-id="1a9af371"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_title.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-title mk-title-stroke">
              <h2 className="mk-title-heading swm-hide-none">
                <span>New Delhi</span>
              </h2>
            </div>{" "}
          </div>
        </div>
        <div
          className="elementor-element elementor-element-3ccbf413 mk-title-align--left elementor-widget elementor-widget-mk_title"
          data-id="3ccbf413"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_title.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-title mk-title-">
              <div className="mk-title-subtitle swm-hide-none">
                India
              </div>
              <div className="mk-title-desc swm-hide-none">
                <span>
                F, 73, Okhla Phase 3 Rd
                  <br />
                  Okhla Phase III, Okhla Industrial Estate
                  <br />
                  New Delhi, Delhi 110020
                  <br/>
                  +91 81308 38855
                </span>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationContent;

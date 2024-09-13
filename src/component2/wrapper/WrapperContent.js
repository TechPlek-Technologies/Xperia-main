import React from "react";

const WrapperContent = ({ settingsData }) => {
  return (
    <div className="elementor-widget-container">
      <div className="mk-title mk-title-">
        <div className="mk-title-desc swm-hide-none">
          <span>
            {settingsData?.sidebar}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WrapperContent;

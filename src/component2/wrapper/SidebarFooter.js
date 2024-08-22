import React from "react";

const SidebarFooter = ({settingsData}) => {
  return (
    <div className="elementor-widget-container">
      <div className="mk-title mk-title-">
        <div className="mk-title-subtitle swm-hide-none">India</div>
        <div className="mk-title-desc swm-hide-none">
          <span>
          {settingsData.address}
            <br />
            {settingsData.phoneNumber}
            <br />
            {settingsData.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;

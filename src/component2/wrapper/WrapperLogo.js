import React from "react";

const WrapperLogo = ({settingsData}) => {
  return (
    <div className="elementor-widget-container">
      <a href="/">
        <img
          width={229}
          src={`${process.env.REACT_APP_API_URL}${settingsData.sidebarLogo.url}`}
          className="attachment-full size-full wp-image-1047"
          alt="sidebar logo"
          style={{ width: "228px" }}
        />
      </a>
    </div>
  );
};

export default WrapperLogo;

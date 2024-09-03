import React from "react";

const WrapperLogo = ({settingsData}) => {
  return (
    <div className="elementor-widget-container">
      <a href="/">
        <img
          width={229}
<<<<<<< HEAD
          src={`https://api.xperiagroup.in${JSON.parse(settingsData?.sidebarLogo).url}`}
=======
          src={`https://api.xperiagroup.in${settingsData?.sidebarLogo.url}`}
>>>>>>> 23aea98167bc6a762ae0c7c3c8e056618a086053
          className="attachment-full size-full wp-image-1047"
          alt="sidebar logo"
          style={{ width: "228px" }}
        />
      </a>
    </div>
  );
};

export default WrapperLogo;

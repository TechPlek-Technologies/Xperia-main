import React from "react";

const FooterLogo = ({ settingsData }) => {
  return (
    <div className="elementor-widget-container">
      <img
        width={319}
        height={217}
<<<<<<< HEAD
        src={`https://api.xperiagroup.in${JSON.parse(settingsData?.footerLogo).url}`}
        alt="footerLogo"
        className="attachment-large size-large wp-image-1206"
        srcSet={`https://api.xperiagroup.in${JSON.parse(settingsData?.footerLogo).url} 319w, https://api.xperiagroup.in${JSON.parse(settingsData?.footerLogo).url} 300w`}
=======
        src={`https://api.xperiagroup.in${settingsData?.footerLogo.url}`}
        alt="footerLogo"
        className="attachment-large size-large wp-image-1206"
        srcSet={`https://api.xperiagroup.in${settingsData?.footerLogo.url} 319w, https://api.xperiagroup.in${settingsData?.footerLogo.url} 300w`}
>>>>>>> 23aea98167bc6a762ae0c7c3c8e056618a086053
        sizes="(max-width: 319px) 100vw, 319px"
      />
    </div>
  );
};

export default FooterLogo;

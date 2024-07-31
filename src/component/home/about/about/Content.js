import React from "react";
import Style from "./Content.module.css";

const Content = ({heading,para}) => {
  return (
    <div className={Style.contentpart}>
      <div className={Style.contentHeading}>{heading}</div>
      <div className={Style.contentpara} dangerouslySetInnerHTML={{ __html: para }}>
      
      </div>
    </div>
  );
};

export default Content;

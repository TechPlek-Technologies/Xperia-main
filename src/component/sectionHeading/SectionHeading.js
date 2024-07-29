import React from "react";
import Style from "./SectionHeading.module.css";

const SectionHeading = ({ title, subheading ,top_space }) => {
  return (
    <>
      <div className={Style.wrapper} style={{marginTop:top_space}}>
        <div className={Style.container}>
          <div className={Style.heading}>
            <h4 className={Style.title}><span>{title}</span></h4>
            <span className={Style.subtitle}>{subheading}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionHeading;

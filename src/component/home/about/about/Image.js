import React from "react";
import Style from "./Image.module.css";

const Image = ({ source, alt, alive }) => {
  return (
    <div className={Style.image}>
      <img
        style={{width: "300px", height:'300px'}}
        src={source}
        alt={alt}
        className={Style.imageinner}
      />
    </div>
  );
};

export default Image;

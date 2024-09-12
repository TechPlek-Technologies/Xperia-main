import React from "react";
import Style from "./Image.module.css";

const Image = ({ source, alt, alive }) => {
  return (
    <div className={Style.image}>
      <img
        style={alive ? { width: "250px", height:'250px' } : {width: "200px", height:'200px'}}
        src={source}
        alt={alt}
        className={Style.imageinner}
      />
    </div>
  );
};

export default Image;

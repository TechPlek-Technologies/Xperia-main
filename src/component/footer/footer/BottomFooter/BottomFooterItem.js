import React from "react";
import Style from "./BottomFooterItem.module.css";
const BottomFooterItem = ({ subtitle, src, text }) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <div className={Style.title}>
          <div className={Style.subtitle}>{subtitle}</div>
          <h2 className={Style.headTag}>
            <span className={Style.span}>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className={Style.anchorTag}
               
              >{text}</a>
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BottomFooterItem;

import React from "react";
import Style from "./AboutMobile.module.css";
import Button from "../about/Button";
import SectionHeading from "../../../../component2/common/section-heading";

const AboutMobile = ({ AboutData }) => {
  return (
    <>
      <SectionHeading title={"who we are"} subTitle={"discover our identity"} />
      <div className={Style.wrapper}>
        <div className={Style.container}>
          {AboutData.map((item) => (
            <div className={Style.containerInner}>
              <div className={Style.image}>
                <img
                  src={item.logo.path}
                  alt={item.logo.name}
                  height={"200px"}
                  width={"200px"}
                />
              </div>
              <div className={Style.content}>
                <h4 className={Style.h4}>{item.title}</h4>
                <p className={Style.para}>{item.content}</p>
              </div>
              <div className={Style.button}>
                <Button />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMobile;

import React from "react";
import Style from "./Footer.module.css";
import TopFooter from "./footer/topFooter/TopFooter";
import BottomFooter from "./footer/BottomFooter/BottomFooter";
import FormSection from "./footer/topFooter/sections/FormSection";
import { domain } from "../../domain";
export const Footer = ({settingsData}) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.motion_wrapper}>
        <div className={Style.main_footer}>{<TopFooter settingsData={settingsData}/>}</div>
        <div className={Style.information}>{<FormSection />}</div>
      </div>
      <div className={Style.container}>{<BottomFooter settingsData={settingsData} />}</div>
      <div className={Style.copyright}>
        <p>
          © Copyright 2024 By <a href={domain}>XPERIA group</a>, All right reserved.
          Developed by{" "}
          <a href="https://www.techplek.com/">TechPlek Technologies</a>.
        </p>
      </div>
    </div>
  );
};

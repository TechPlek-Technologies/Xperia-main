import React from "react";
import Style from "./LogoSection.module.css";
import { Link } from "react-router-dom";
const MediaIcons = ({ socialMediaIcons }) => {
  return (
    <div className={Style.social_wrapper}>
      <ul className={Style.uList}>
        {socialMediaIcons.map((icons,index) => (
          <li className={Style.list} key={index}>
            <Link to={icons.link} className={Style.links}>
              <span className={Style.span}>
                <i className={icons.icon}></i>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaIcons;

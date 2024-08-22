import React from "react";
import Style from "./LogoSection.module.css";
import { Link } from "react-router-dom";
const MediaIcons = ({ socialMediaIcons }) => {
  return (
    <div className={Style.social_wrapper}>
      <ul className={Style.uList}>
        {socialMediaIcons.map((icons) => (
          <li className={Style.list}>
            <Link to={icons.link} className={Style.links}>
              <span className={Style.span}>
                <i class={icons.icon}></i>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaIcons;

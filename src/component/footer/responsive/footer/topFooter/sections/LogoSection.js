import React from "react";
import Style from "./LogoSection.module.css";
import { Link } from "react-router-dom";
const LogoSection = ({ settingsData }) => {
  const socialMediaIcons = [
    {
      link: settingsData?.instagram,
      icon: "fab fa-instagram",
    },
    {
      link: settingsData?.facebook,
      icon: "fa-brands fa-facebook-f",
    },
    {
      link: settingsData?.x,
      icon: "fa-brands fa-linkedin",
    },
    {
      link: settingsData?.youtube,
      icon: "fa-brands fa-youtube",
    },
  ];
  return (
    <div className={Style.wrapper}>
      <div className={Style.logo}>
        <div className={Style.container}>
          <a href={"/"} className={Style.link}>
            <img
              src={`https://api.xperiagroup.in${settingsData?.footerLogo?.url}`}
              alt="footerLogo"
              className={Style.image}
            />
          </a>
        </div>
      </div>

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
    </div>
  );
};

export default LogoSection;

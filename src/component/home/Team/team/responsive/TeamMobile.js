import React from "react";
import Style from "./TeamMobile.module.css";
import Button from "../../../about/about/Button";

const TeamMobile = ({Teamdata}) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <div className={Style.widget}>
          <div className={Style.widgetContainer}>
            {Teamdata.map((item) => (
              <div className={Style.team}>
                <div className={Style.position}>{item.designation}</div>
                <div className={Style.image}>
                  <img
                    src={item.image.path}
                    alt={item.image.name}
                    className={Style.imageinner}
                    // height={"370px"}
                    // width={"350px"}
                  ></img>
                </div>
                <div className={Style.content}>
                  <div className={Style.name}>{item.name}</div>
                  <div className={Style.description}>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={Style.button}>
        <Button text={"View All"} src="" />
      </div>
    </div>
  );
};

export default TeamMobile;

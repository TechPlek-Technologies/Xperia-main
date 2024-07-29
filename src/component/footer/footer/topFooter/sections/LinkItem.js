import React from "react";
import Style from "./LinkItem.module.css";
import { Link } from "react-router-dom";
const LinkItem = ({ title, listItem }) => {
  return (
    <>
      <div className={Style.header}>
        <h2 className={Style.h2}>
          <span>{title}</span>
        </h2>
      </div>
      <div className={Style.body}>
        <div className={Style.container}>
          <div className={Style.list}>
            <div className={Style.listItem}>
              {listItem.map((item) => (
                <>
                  <Link to={item.src} className={Style.link}>
                  <h4 className={Style.h4}>{item.name}</h4>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkItem;

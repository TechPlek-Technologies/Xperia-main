import React from "react";
import Style from "./BottomFooter.module.css";
import BottomFooterItem from "./BottomFooterItem";

const BottomFooter = ({ settingsData }) => {
  const BottomFooterData = [
    {
      text: settingsData.phoneNumber,
      src: `tel:+91${ settingsData.phoneNumber}`,
      subtitle: "call our office",
    },
    {
      text: settingsData.email,
      src: `mailto:${settingsData.email}`,
      subtitle: "send a message",
    },
    {
      text: settingsData.address,
      src: "",
      subtitle: "our address",
    },
  ];
  return (
    <div className={Style.wrapper}>
      {BottomFooterData.map((item) => (
        <BottomFooterItem
          src={item.src}
          text={item.text}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
};

export default BottomFooter;

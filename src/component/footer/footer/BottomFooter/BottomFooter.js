import React from "react";
import Style from "./BottomFooter.module.css";
import BottomFooterItem from "./BottomFooterItem";

const BottomFooter = () => {
  const BottomFooterData = [
    {
      text: "+91 813 083 8855",
      src: "tel:+918130838855",
      subtitle: "call our office",
    },
    {
      text: "SaibalGupta@xperiagroup.in",
      src: "mailto:SaibalGupta@xperiagroup.in",
      subtitle: "send a message",
    },
    { text: "F-73, 3rd Floor,Okhla Industrial Area Ph 3,New Delhi, 110020", src: "", subtitle: "our address" },
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

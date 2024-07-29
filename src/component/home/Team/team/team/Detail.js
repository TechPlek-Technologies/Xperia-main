import React from "react";
import Style from "./Detail.module.css";

const Detail = ({ name, designation, description, isSelected,selectedIndex}) => {

let hoverImageStyle=Style.Detail;

if(selectedIndex===0){
  hoverImageStyle=Style.Detail;
}else if(selectedIndex===1){
  hoverImageStyle=Style.Detail1;
}else{
  hoverImageStyle=Style.Detail2;
}
  return (
    <div>
      <div className={hoverImageStyle}>
        <div className={Style.DetailHeading}>{name}</div> 
        <div className={Style.Detaildesign}>{designation}</div>
       <div className={Style.Detailpara}>{description}</div>
      </div>
    </div>
  );
};

export default Detail;

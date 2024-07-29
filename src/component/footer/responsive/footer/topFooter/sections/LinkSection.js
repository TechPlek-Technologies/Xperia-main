import React from 'react'
import Style from './LinkSection.module.css'
import LinkItem from './LinkItem'
import FormSection from './FormSection';
const LinkSection = () => {
  const information = [
    { src: "/", name: "About Company" },
    { src: "/", name: "Blogs" },
    { src: "/", name: "Contact Us" },
    { src: "/", name: "Team" },
    { src: "/", name: "Carrier" },
  ];
  const services = [
    { src: "/", name: "Out of Home" },
    { src: "/", name: "Multiplex Cinema Advertising" },
    { src: "/", name: "Events & Promotions" },
    { src: "/", name: "Content Design" },
    { src: "/", name: "Creative retainership" },
    { src: "/", name: "Corporate Films" },
    { src: "/", name: "Music" },
  ];
  return (
    <>
    <div className={Style.wrapper}>
    <div className={Style.information}>{<LinkItem title={"Information"} listItem={information}/>}</div>
    <div className={Style.information}>{<LinkItem title={"Services"} listItem={services}/>}</div>
    <div className={Style.information}>{<FormSection/>}</div>
    </div>
  
    </>
  )
}

export default LinkSection
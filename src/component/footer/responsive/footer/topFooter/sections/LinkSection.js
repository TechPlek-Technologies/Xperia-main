import React from 'react'
import Style from './LinkSection.module.css'
import LinkItem from './LinkItem'
import FormSection from './FormSection';
import { domain } from '../../../../../../domain';
const LinkSection = () => {
  const information = [
    { src: `${domain}/xperia-group`, name: "Xperia Group" },
    { src: `${domain}/xperia-alive`, name: "Xperia Alive" },
    { src: `${domain}/pencil-box`, name: "Pencil Box" },
    { src: `${domain}/blogs`, name: "Blogs" },
    { src: `${domain}/get-in-touch`, name: "Contact Us" },
    { src:  `${domain}/team`, name: "Team" },
  ];
  const services = [
    { src: `${domain}/out-of-home`, name: "Out of Home" },
    { src: `${domain}/multiplex-and-cinema-advertisement`, name: "Multiplex " },
    { src: `${domain}/events-and-promotions`, name: "Events & Promotions" },
    { src: `${domain}/content-design`, name: "Content Design" },
    { src: `${domain}/creative-retainership`, name: "Creative Retainership" },
    { src: `${domain}/corporate-films`, name: "Corporate Films" },
    { src: `${domain}/music`, name: "Music" },
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
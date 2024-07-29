import React from 'react'
import Style from "./LogoSection.module.css"
import { Link } from 'react-router-dom'
import { domain } from '../../../../../../domain'
const LogoSection = () => {

    const socialMediaIcons=[
        {
            link:"https://www.instagram.com/",
            icon:"fab fa-instagram"
        },
        {
            link:"https://www.facebook.com/",
            icon:"fa-brands fa-facebook-f"
        },
        {
            link:"https://www.linkedin.com/",
            icon:"fa-brands fa-linkedin"
        },
        {
            link:"https://www.youtube.com/",
            icon:"fa-brands fa-youtube"
        },
    ]
  return (
    <div className={Style.wrapper}>
        <div className={Style.logo}>
            <div className={Style.container}>
                <Link to={"/"} className={Style.link}>
                    <img src={`${domain}/assets/footerLogo.webp`} alt='footerLogo' className={Style.image} />
                </Link>
            </div>
        </div>


        <div className={Style.social_wrapper}>
            <ul className={Style.uList}>

                {socialMediaIcons.map((icons)=>(
                     <li className={Style.list}>
                        <Link to={icons.link} className={Style.links}>
                        <span className={Style.span}>
                        <i class={icons.icon} ></i>
                        </span>
                        </Link>
                     </li>
                ))}
               

            </ul>
        </div>
    </div>
  )
}

export default LogoSection
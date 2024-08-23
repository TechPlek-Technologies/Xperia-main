import React from 'react'
import Style from "./LogoSection.module.css"
import { Link } from 'react-router-dom'
import MediaIcons from './MediaIcons'
const LogoSection = ({settingsData}) => {

    const socialMediaIcons=[
        {
            link:settingsData?.instagram,
            icon:"fab fa-instagram"
        },
        {
            link:settingsData?.facebook,
            icon:"fa-brands fa-facebook-f"
        },
        {
            link:settingsData?.x,
            icon:"fa-brands fa-linkedin"
        },
        {
            link:settingsData?.youtube,
            icon:"fa-brands fa-youtube"
        },
    ]
  return (
    <div className={Style.wrapper}>
        <div className={Style.logo}>
            <div className={Style.container}>
                <Link to={"/"} className={Style.link}>
                    <img src={`${process.env.REACT_APP_API_URL}${JSON.parse(settingsData?.footerLogo)?.url}`} alt='footerLogo' className={Style.image} />
                </Link>
            </div>
        </div>


      {<MediaIcons socialMediaIcons={socialMediaIcons} />}
    </div>
  )
}

export default LogoSection
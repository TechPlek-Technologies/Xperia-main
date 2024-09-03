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
<<<<<<< HEAD
                    <img src={`https://api.xperiagroup.in${JSON.parse(settingsData?.footerLogo)?.url}`} alt='footerLogo' className={Style.image} />
=======
                    <img src={`https://api.xperiagroup.in${settingsData?.footerLogo?.url}`} alt='footerLogo' className={Style.image} />
>>>>>>> 23aea98167bc6a762ae0c7c3c8e056618a086053
                </Link>
            </div>
        </div>


      {<MediaIcons socialMediaIcons={socialMediaIcons} />}
    </div>
  )
}

export default LogoSection
import React from 'react'
import Style from './TopFooter.module.css'
import LogoSection from './sections/LogoSection'
import LinkSection from './sections/LinkSection'
const TopFooter = () => {
  return (
    <>
    <div className={Style.logo_section}>{<LogoSection/>}</div>
    <div className={Style.link_section}>{<LinkSection/>}</div>
    </>
  )
}

export default TopFooter
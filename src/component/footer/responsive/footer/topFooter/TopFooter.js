import React from 'react'
import Style from './TopFooter.module.css'
import LogoSection from './sections/LogoSection'
import LinkSection from './sections/LinkSection'
const TopFooter = ({settingsData}) => {
  return (
    <>
    <div className={Style.logo_section}>{<LogoSection settingsData={settingsData} />}</div>
    <div className={Style.link_section}>{<LinkSection settingsData={settingsData} />}</div>
    </>
  )
}

export default TopFooter
import React from 'react'
import Style from './Footer.module.css'
import TopFooter from './footer/topFooter/TopFooter'
import BottomFooter from './footer/BottomFooter/BottomFooter'
export const ResponsiveFooter = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.motion_wrapper}>
      <div className={Style.main_footer}>{<TopFooter/>}</div>
      <div className={Style.container}>{<BottomFooter/>}</div>
      
      </div>
    </div>
  )
}

import React from 'react'

const Rightwrapper = ({children}) => {
  return (
    <div className="mk-dual-slider-right-holder">
    <div className="swiper-pagination" />
    <div
      className="mk-dual-slider-right mk-dual-slider-swiper-container"
      data-settings='{"effect":"slide","dots_on":"yes","autoplay":"yes","autoplay_speed":3000,"speed":1000}'
    >
      <div className="swiper-wrapper">
       {children}
      </div>
    </div>
  </div>
  )
}

export default Rightwrapper

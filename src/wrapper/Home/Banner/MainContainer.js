import React from 'react'
import MainWrapper from './MainWrapper'
import LeftWrapper from './left-wrapper'
import LeftContent from './LeftContent'
import Rightwrapper from './Right-wrapper'
import RightContent from './RightContent'

const MainContainer = ({BannerData}) => {
  return (
    <MainWrapper>
        <LeftWrapper> 
          <LeftContent BannerData={BannerData}/>
        </LeftWrapper>

        <Rightwrapper>
            <RightContent BannerData={BannerData}/>
        </Rightwrapper>


    </MainWrapper>
  )
}

export default MainContainer

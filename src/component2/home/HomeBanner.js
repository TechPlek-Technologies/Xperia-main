import React from "react";
import { BannerData } from "../../data/home/Data";
import MainWrapper from "../../wrapper/Home/Banner/MainWrapper";
import LeftContent from "../../wrapper/Home/Banner/LeftContent";
import LeftWrapper from "../../wrapper/Home/Banner/left-wrapper";
import Rightwrapper from "../../wrapper/Home/Banner/Right-wrapper";
import RightContent from "../../wrapper/Home/Banner/RightContent";


const HomeBanner = () => {
  return (
    <MainWrapper>
    <LeftWrapper> 
      <LeftContent BannerData={BannerData}/>
    </LeftWrapper>

    <Rightwrapper>
        <RightContent BannerData={BannerData}/>
    </Rightwrapper>


</MainWrapper>
  );
};

export default HomeBanner;

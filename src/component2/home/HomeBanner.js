import React from "react";
import MainWrapper from "../../wrapper/Home/Banner/MainWrapper";
import LeftContent from "../../wrapper/Home/Banner/LeftContent";
import LeftWrapper from "../../wrapper/Home/Banner/left-wrapper";
import Rightwrapper from "../../wrapper/Home/Banner/Right-wrapper";
import RightContent from "../../wrapper/Home/Banner/RightContent";
import { useSelector } from "react-redux";

const HomeBanner = () => {
  // const data = JSON.parse(localStorage.getItem("Banner"));
  const { bannerData: data } = useSelector((state) => state.banners);

  return (
    <MainWrapper>
      <LeftWrapper>{ <LeftContent BannerData={data} />}</LeftWrapper>

      <Rightwrapper>{ <RightContent BannerData={data} />}</Rightwrapper>
    </MainWrapper>
  );
};

export default HomeBanner;

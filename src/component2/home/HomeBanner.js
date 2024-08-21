import React, { useEffect } from "react";
import MainWrapper from "../../wrapper/Home/Banner/MainWrapper";
import LeftContent from "../../wrapper/Home/Banner/LeftContent";
import LeftWrapper from "../../wrapper/Home/Banner/left-wrapper";
import Rightwrapper from "../../wrapper/Home/Banner/Right-wrapper";
import RightContent from "../../wrapper/Home/Banner/RightContent";
import axios from "axios";

const HomeBanner = () => {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/home-banner/all-banners`
      );
      if (response.status === 200) {
        setData(response.data);
      }
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <MainWrapper>
      <LeftWrapper>{data && <LeftContent BannerData={data} />}</LeftWrapper>

      <Rightwrapper>{data && <RightContent BannerData={data} />}</Rightwrapper>
    </MainWrapper>
  );
};

export default HomeBanner;

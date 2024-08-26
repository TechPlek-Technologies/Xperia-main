import React, { useEffect, useState } from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/IndividualProjects/Banner";
import Content from "../component2/IndividualProjects/Content";
import Slider from "../component2/IndividualProjects/Slider";
import Description from "../component2/IndividualProjects/Description";
import Gallery from "../component2/IndividualProjects/Gallery";
import ProjectDetail from "../component2/IndividualProjects/ProjectDetail";
import ProjectNavigation from "../component2/IndividualProjects/ProjectNavigation";
import axios from "axios";
import Content2 from "../component2/IndividualProjects/Content2";

const IndividualProject = () => {
  const pathname = window.location.pathname; // Endpoint (e.g., /about/123)


  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/services/find-by-slug${pathname}`
      );
      if (response.status === 200) {
        console.log("response.service",response.data)
        setData(response.data);
      }
    };
    fetchData();
  }, []);
  function formatString(str) {
    // Replace hyphens with spaces and remove slashes
    let formattedStr = str.replace(/-/g, " ").replace(/\//g, "");

    // Capitalize the first letter of each word
    formattedStr = formattedStr.replace(/\b\w/g, (char) => char.toUpperCase());

    return formattedStr;
  }

  return (
    <Layout type={"other"}>
      <div
        data-elementor-type="wp-post"
        data-elementor-id={1331}
        className="elementor elementor-1331"
      >
        {data && <Banner data={data} title={formatString(pathname)} />}
        {data && <Content data={data} />}
        {data && <Slider data={data} />}
        {data && <Content2 data={data} />}
        {/* <Description /> */}
        {/* <Gallery /> */}
        {data && <ProjectDetail title={formatString(pathname)} data={data} />}
        {/* <ProjectNavigation /> */}
      </div>
    </Layout>
  );
};

export default IndividualProject;

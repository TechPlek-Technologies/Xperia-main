import React, { useEffect, useState } from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/IndividualProjects1/Banner";
import Content from "../component2/IndividualProjects1/Content";
import Slider from "../component2/IndividualProjects1/Slider";
import Description from "../component2/IndividualProjects1/Description";
import Gallery from "../component2/IndividualProjects1/Gallery";
import ProjectDetail from "../component2/IndividualProjects1/ProjectDetail";
import ProjectNavigation from "../component2/IndividualProjects1/ProjectNavigation";
import axios from "axios";
import Content2 from "../component2/IndividualProjects1/Content2";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IndividualProject1 = () => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("title");
  // Extract a specific query parameter

  // const projectData = JSON.parse(localStorage.getItem("projects"));
  const { projectData } = useSelector((state) => state.projects);

  const data = projectData?.filter((data) => data.slug === paramValue);
  return (
    <Layout type={"other"}>
      <div
        data-elementor-type="wp-post"
        data-elementor-id={1331}
        className="elementor elementor-1331"
      >
        {data && <Banner data={data[0]} />}
        {data && <Content data={data[0]} />}
        {data && <Slider data={data[0]} />}
        {/* {data && <Content2 data={data[0]} />} */}
        <Description data={data[0]} />
        <Gallery data={data[0]} />
        {data && <ProjectDetail data={data[0]} />}
        {/* <ProjectNavigation /> */}
      </div>
    </Layout>
  );
};

export default IndividualProject1;

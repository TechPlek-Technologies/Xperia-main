import React from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/IndividualProjects/Banner";
import Content from "../component2/IndividualProjects/Content";
import Slider from "../component2/IndividualProjects/Slider";
import Description from "../component2/IndividualProjects/Description";
import Gallery from "../component2/IndividualProjects/Gallery";
import ProjectDetail from "../component2/IndividualProjects/ProjectDetail";
import ProjectNavigation from "../component2/IndividualProjects/ProjectNavigation";

const IndividualProject = () => {
  return (
    <Layout type={"other"}>
      <div
        data-elementor-type="wp-post"
        data-elementor-id={1331}
        className="elementor elementor-1331"
      >
        <Banner />
        <Content />
        <Slider />
        <Description />
        <Gallery />
        <ProjectDetail />
        <ProjectNavigation />
      </div>
    </Layout>
  );
};

export default IndividualProject;

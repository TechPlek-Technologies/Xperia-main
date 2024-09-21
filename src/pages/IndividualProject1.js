import React, { useEffect, useMemo } from "react";
import Layout2 from "../component2/wrapper/Layout2";
import Banner from "../component2/IndividualProjects1/Banner";
import Content from "../component2/IndividualProjects1/Content";
import Slider from "../component2/IndividualProjects1/Slider";
import Gallery from "../component2/IndividualProjects1/Gallery";
import ProjectDetail from "../component2/IndividualProjects1/ProjectDetail";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const IndividualProject1 = () => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("title");

  const { projectData } = useSelector((state) => state.projects);

  // Use useMemo to avoid recalculating on every render
  const data = useMemo(
    () => projectData?.find((data) => data.slug === paramValue),
    [projectData, paramValue]
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/wp-content/mk-widgets.min.js";
    script.id = "mk-widgets-js";
    // Append the script to the body
    document.body.appendChild(script);
    // Cleanup function to remove the script when the component unmounts
  }, []);

  // Early return if no data is found
  if (!data) {
    return (
      <Layout2 type={"other"}>
        <p>Project not found</p>
      </Layout2>
    );
  }

  return (
    <Layout2 type={"other"}>
      <div
        data-elementor-type="wp-post"
        data-elementor-id={1331}
        className="elementor elementor-1331 elementor elementor-1255"
      >
        <Banner data={data} />
        <Content data={data} />
        <Slider data={data} />
        <Gallery data={data} />
        <ProjectDetail data={data} />
      </div>
    </Layout2>
  );
};

export default IndividualProject1;

import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom"; // useLocation instead of window.location
import Layout2 from "../component2/wrapper/Layout2";
import Banner from "../component2/IndividualProjects/Banner";
import Content from "../component2/IndividualProjects/Content";
import Slider from "../component2/IndividualProjects/Slider";
import Content2 from "../component2/IndividualProjects/Content2";
import ProjectDetail from "../component2/IndividualProjects/ProjectDetail";
import { useSelector } from "react-redux";

const IndividualProject = () => {
  const { pathname } = useLocation(); // Use React Router's useLocation hook

  // Get serviceData from Redux store
  const { serviceData } = useSelector((state) => state.service);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Format pathname and filter data based on slug
  const filteredData = useMemo(() => {
    if (!serviceData) return null;

    // Remove leading slash if exists
    const formattedPathname = pathname.replace(/^\/+/, "");

    // Find the object in serviceData where slug matches pathname
    return serviceData.find((item) => item.slug === formattedPathname);
  }, [serviceData, pathname]);

  const formatString = useMemo(() => {
    if (!pathname) return "";

    // Replace hyphens with spaces, remove slashes, and capitalize words
    return pathname
      .replace(/-/g, " ")
      .replace(/\//g, "")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }, [pathname]);

  if (!filteredData) {
    return (
      <Layout2 type={"other"}>
        <p>{error}</p>
      </Layout2>
    );
  }

  if (!filteredData) {
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
        className="elementor elementor-1331"
      >
        <>
          <Banner data={filteredData} title={formatString} />
          <Content data={filteredData} />
          <Slider data={filteredData} />
          <Content2 data={filteredData} />
          <ProjectDetail title={formatString} data={filteredData} />
        </>
      </div>
    </Layout2>
  );
};

export default IndividualProject;

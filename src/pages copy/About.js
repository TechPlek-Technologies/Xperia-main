import React, { useEffect } from "react";
import Layout from "../component2/wrapper/Layout";
import Banner from "../component2/about/Banner";
import Testimonial from "../component1/testimonial/Testimonial";
import TextContent from "../component2/about/TextContent";
import Projects from "../component2/about/Projects";
import BottomSection from "../component2/about/BottomSection";
import axios from "axios";

const About = () => {
  const pathname = window.location.pathname; // Endpoint (e.g., /about/123)

  const [data, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/about/find-by-slug${pathname}`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout type={"other"}>
      {data && <Banner data={data} />}
      {data && <TextContent data={data} />}
      {/* <Projects /> */}
      <BottomSection />
      <Testimonial />
    </Layout>
  );
};

export default About;

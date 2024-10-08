import React, { useEffect } from "react";
import Banner from "../component2/about/Banner";
import Testimonial from "../component1/testimonial/Testimonial";
import TextContent from "../component2/about/TextContent";
import Projects from "../component2/about/Projects";
import BottomSection from "../component2/about/BottomSection";
import axios from "axios";
import Layout2 from "../component2/wrapper/Layout2";

const About = () => {
  const pathname = window.location.pathname; // Endpoint (e.g., /about/123)

  const [data, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.xperiagroup.in/about/find-by-slug${pathname}`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, [pathname]);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/wp-content/mk-widgets.min.js";
    script.id = "mk-widgets-js";
    // Append the script to the body
    document.body.appendChild(script);
    // Cleanup function to remove the script when the component unmounts
  }, []);

  return (
    <Layout2>
      {data && <Banner data={data} />}
      {data && <TextContent data={data} />}
      {/* <Projects /> */}
      <BottomSection />
      <Testimonial />
    </Layout2>
  );
};

export default About;

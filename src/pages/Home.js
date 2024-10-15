import React, { useEffect, useRef, useState } from "react";
import Layout from "../component2/wrapper/Layout";
import HomeBanner from "../component2/home/HomeBanner";
import Services from "../component2/home/Services";
import Projects from "../component2/home/Projects";
import Testimonial from "../component1/testimonial/Testimonial";
import Blog from "../component1/blog/Blog";
import Award from "../component1/award/Award";
import AboutSection from "../component/home/AboutSection";
import Team from "../component2/home/Team";
import { useSelector } from "react-redux";

const Home = () => {
  const [iframeHeight, setIframeHeight] = useState('800px');
  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div>
    <iframe
      src="https://techpartner.online/orbius/"
      style={{
        width: '100%',
        height: iframeHeight,
        border: 'none',
        overflow: 'hidden',
      }}
      title="WordPress Homepage"
    />
  </div>
  );
};

export default Home;

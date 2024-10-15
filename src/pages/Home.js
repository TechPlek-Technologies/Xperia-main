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
  const [iframeHeight, setIframeHeight] = useState('100vh');
  const [key, setKey] = useState(Date.now()); // Unique key to force iframe reload

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Function to reload iframe (optional: add a button or other event to trigger this)
  const reloadIframe = () => {
    setKey(Date.now()); // Update key to force re-render of iframe
  };

  return (
    <div>
      <iframe
        key={key}  // This ensures a new iframe instance every time the key changes
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
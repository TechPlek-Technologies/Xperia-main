import React, { useEffect } from "react";
// import Banner from '../component2/contact/Banner';
import Layout from "../component2/wrapper/Layout";
import Form from "../component2/contact/Form";
import Layout2 from "../component2/wrapper/Layout2";

const Contact = () => {
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
      <div
        data-elementor-type="wp-page"
        data-elementor-id="1266"
        className="elementor elementor-1266"
      >
        <Form />
      </div>
    </Layout2>
  );
};

export default Contact;

import React, { useEffect } from 'react'
import Layout from '../component2/wrapper/Layout'
import Banner from '../component2/contact/Banner'
import Title from '../component2/contact/Title'
import LocationContent from '../component2/contact/LocationContent'
import Map from '../component2/contact/Map'
import GoogleMapComponent from '../component2/contact/GoogleMapComponent'
import Layout2 from '../component2/wrapper/Layout2'

const Locations = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/wp-content/mk-widgets.min.js";
    script.id = "mk-widgets-js";
    // Append the script to the body
    document.body.appendChild(script);
    // Cleanup function to remove the script when the component unmounts
  }, []);
  return (
    <Layout2 type={"other"}>
  <div
        data-elementor-type="wp-page"
        data-elementor-id="1266"
        className="elementor elementor-1266"
      >
        <Banner/>
        <Title/>
        <LocationContent/>
        <GoogleMapComponent/>
        {/* <Map/> */}
      </div>
    </Layout2>
  )
}

export default Locations
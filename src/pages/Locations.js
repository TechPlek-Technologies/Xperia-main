import React from 'react'
import Layout from '../component2/wrapper/Layout'
import Banner from '../component2/contact/Banner'
import Title from '../component2/contact/Title'
import LocationContent from '../component2/contact/LocationContent'
import Map from '../component2/contact/Map'
import GoogleMapComponent from '../component2/contact/GoogleMapComponent'

const Locations = () => {
  return (
    <Layout type={"other"}>
  <div
        data-elementor-type="wp-page"
        data-elementor-id="1266"
        class="elementor elementor-1266"
      >
        <Banner/>
        <Title/>
        <LocationContent/>
        <GoogleMapComponent/>
        {/* <Map/> */}
      </div>
    </Layout>
  )
}

export default Locations
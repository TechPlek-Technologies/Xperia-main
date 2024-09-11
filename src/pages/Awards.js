import React, { useEffect, useState } from "react";
import Layout from "../component2/wrapper/Layout";
import TeamSection from "../component2/team/TeamSection";
import axios from "axios";
import AwardSection from "../component2/awards/TeamSection";
import Breadcrumb from "../component2/awards/Breadcrumb";

const Awards = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.xperiagroup.in/awards/all-awards`
      );
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout>
      <Breadcrumb />
      <div id="content" className="swm-main-container swm-site-content swm-anim">
        <div className="swm_site_content_wrap swm-container"></div>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="1259"
          className="elementor elementor-1259"
        >
          {data && <AwardSection data={data} />}
        </div>

        <div className="clear"></div>
      </div>
    </Layout>
  );
};

export default Awards;

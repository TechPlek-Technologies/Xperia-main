import React, { useEffect, useState } from "react";
import Layout from "../component2/wrapper/Layout";
import Breadcrumb from "../component2/team/Breadcrumb";
import TeamSection from "../component2/team/TeamSection";
import axios from "axios";

const Team = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/teams/all-teams`
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
      <div id="content" class="swm-main-container swm-site-content swm-anim">
        <div class="swm_site_content_wrap swm-container"></div>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="1259"
          class="elementor elementor-1259"
        >
          {data && <TeamSection data={data} />}
        </div>

        <div class="clear"></div>
      </div>
    </Layout>
  );
};

export default Team;

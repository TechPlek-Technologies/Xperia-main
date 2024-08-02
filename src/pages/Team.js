import React from "react";
import Layout from "../component2/wrapper/Layout";
import Breadcrumb from "../component2/team/Breadcrumb";
import TeamSection from "../component2/team/TeamSection";

const Team = () => {
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
          <TeamSection />
        </div>

        <div class="clear"></div>
      </div>
    </Layout>
  );
};

export default Team;

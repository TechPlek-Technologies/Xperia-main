import React from "react";
import TeamSection from "../component2/team/TeamSection";
import { useSelector } from "react-redux";
import Layout2 from "../component2/wrapper/Layout2";

const Team = () => {
 
  const { teamData: data } = useSelector((state) => state.teams);
  return (
    <Layout2>
      <div id="content" className="swm-main-container swm-site-content swm-anim">
        <div className="swm_site_content_wrap swm-container"></div>
        <div
          data-elementor-type="wp-page"
          data-elementor-id="1259"
          className="elementor elementor-1259 elementor-1267"
        >
            <div
            className="elementor-element elementor-element-2158acdf e-con-full e-flex e-con e-parent"
            data-id="2158acdf"
            data-element_type="container"
            data-settings='{"mk_ext_is_sticky":"false"}'
            data-core-v316-plus="true"
          >
            <div
              className="elementor-element elementor-element-2552d0e3 elementor-widget elementor-widget-mk_section_heading"
              data-id="2552d0e3"
              data-element_type="widget"
              data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
              data-widget_type="mk_section_heading.default"
            >
              <div className="elementor-widget-container">
                <div className="mk-section-heading">
                  <h4 className="mk-section-heading-title">
                    <span>teams</span>
                  </h4>
                  <span className="mk-section-heading-subtitle swm-hide-tablet">
                    / brains behind the screen
                  </span>
                </div>
              </div>
            </div>
          </div>
          {data && <TeamSection data={data} />}
        </div>

        <div className="clear"></div>
      </div>
    </Layout2>
  );
};

export default Team;

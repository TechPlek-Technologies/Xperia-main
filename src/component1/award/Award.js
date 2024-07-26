import React from "react";
import { AwardData } from "../../data/home/Data";
import AwardImages from "./AwardImages";
import AwardItems from "./AwardItems";
import SectionHeading from "../../component2/common/section-heading";

const Award = () => {
 

  const [activeId, setActiveId] = React.useState("tab-1");

  const handleMouseEnter = (id) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId("tab-1");
  };
  return (
    <>
      <SectionHeading title={"awards"} subTitle={"notable achievements"} />

      <div
        className="elementor-element elementor-element-6059ba68 e-con-full e-flex e-con e-parent"
        data-id="6059ba68"
        data-element_type="container"
        data-settings='{"mk_ext_is_sticky":"false"}'
        data-core-v316-plus="true"
      >
        <div
          className="elementor-element elementor-element-3b3b5eb0 elementor-widget__width-inherit elementor-widget elementor-widget-mk_awards"
          data-id="3b3b5eb0"
          data-element_type="widget"
          data-settings='{"mk_ext_is_infinite":"false","mk_ext_is_scrollme":"false"}'
          data-widget_type="mk_awards.default"
        >
          <div className="elementor-widget-container">
            <div className="mk-awards-container">
              <div className="mk-awards">
                <AwardImages imageData={AwardData.awardInnerData} activeId={activeId} data={AwardData.awardInnerData}/>
                <AwardItems imageData={AwardData.awardInnerData} activeId={activeId} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} data={AwardData.awardInnerData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;

import React, { useEffect } from "react";
import AwardImages from "./AwardImages";
import AwardItems from "./AwardItems";
import SectionHeading from "../../component2/common/section-heading";
import axios from "axios";
import Button from "../../component/home/about/about/Button";
import { domain } from "../../domain";

const Award = () => {
  const [activeId, setActiveId] = React.useState(1);

  const handleMouseEnter = (id) => {
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(1);
  };

  const [data, setData] = React.useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.xperiagroup.in/awards/all-awards`
      );
      if (response.status === 200) {
        console.log(response.data);
        
        setData(response.data.slice(0,5));
        setActiveId(response?.data[0]?.id)
      }
    };
    fetchData();
  }, []);
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
                {data && <AwardImages imageData={data} activeId={activeId} />}
                {data && (
                  <AwardItems
                    imageData={data}
                    activeId={activeId}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                  />
                )}
              </div>
            </div>
          </div>
        <Button text={"view all"} src={`${domain}/awards`} />
        </div>
      </div>
    </>
  );
};

export default Award;

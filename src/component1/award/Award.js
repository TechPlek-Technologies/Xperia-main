import React from "react";
import { AwardData } from "../../data/home/Data";
import AwardImages from "./AwardImages";
import AwardItems from "./AwardItems";
import { domain } from "../../domain";
import SectionHeading from "../../component2/common/section-heading";

const Award = () => {
  const imageData = [
    {
      id: "tab-1",
      href: `${domain}`,
      src: `${domain}/assets/img/awards/2024/GoldE4MNeon.webp`,
      year:"2024",
      span:"GOLD",
      title:"E4MENON AWARD",
      subtitle:"Most innovative use of Moving Media TVS Sport & TVS Radeon",
      srcSet:
        "assets/img/awards/2024/GoldE4MNeon.webp 750w, assets/img/awards/2024/GoldE4MNeon.webp 236w",
      sizes: "(max-width: 750px) 100vw, 750px",
      
    },
    {
      id: "tab-2",
      href: `${domain}`,
      src: `${domain}/assets/img/awards/2024/GoldE4MNeonHushPuppy.webp`,
      year:"2024",
      span:"GOLD",
      title:"E4MNEON AWARD",
      subtitle:"Innovative Green Initiative Hush Puppies",
      srcSet:
        "assets/img/awards/2024/GoldE4MNeonHushPuppy.webp 750w, assets/img/awards/2024/GoldE4MNeonHushPuppy.webp 236w",
      sizes: "(max-width: 750px) 100vw, 750px",
    },
    {
      id: "tab-3",
      href: `${domain}`,
      src:  `${domain}/assets/img/awards/2024/SilverE4MNeon.webp`,
      year:"2024",
      span:"SILVER",
      title:"E4MNEON AWARD",
      subtitle:"Most innovative use of Digital OOH Media ITC Sunfeast Mom’s Magic",
      srcSet:
        "assets/img/awards/2024/SilverE4MNeon.webp 750w, assets/img/awards/2024/SilverE4MNeon.webp 236w",
      sizes: "(max-width: 750px) 100vw, 750px",
    },
    {
      id: "tab-4",
      href: `${domain}`,
      src:  `${domain}/assets/img/awards/2024/BronzeE4MNeon.webp`,
      year:"2024",
      span:"BRONZE",
      title:"E4MNEON AWARD",
      subtitle:"Most effective use of Technology ITC Sunfeast Mom’s Magic",
      srcSet:
        "assets/img/awards/2024/BronzeE4MNeon.webp 750w,assets/img/awards/2024/BronzeE4MNeon.webp 236w",
      sizes: "(max-width: 750px) 100vw, 750px",
    },
    {
      id: "tab-5",
      href: `${domain}`,
      src: `${domain}/assets/img/awards/2023/GoldAbby.webp`,
      year:"2023",
      span:"GOLD",
      title:"ABBY’S AWARD",
      subtitle:"Use of media innovation in cinema Maruti Suzuki brezza",
      srcSet:
        "assets/img/awards/2023/GoldAbby.webp 750w, assets/img/awards/2023/GoldAbby.webp 236w",
      sizes: "(max-width: 750px) 100vw, 750px",
    },
  ];

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
                <AwardImages imageData={imageData} activeId={activeId} data={AwardData.awardInnerData}/>
                <AwardItems imageData={imageData} activeId={activeId} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} data={AwardData.awardInnerData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;

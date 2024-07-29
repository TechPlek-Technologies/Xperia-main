import React from "react";
import Style from "./about.module.css";
import { useInView } from "react-intersection-observer";
import { AboutData } from "../../../data/home/Data";
import SectionHeading from "../../../component2/common/section-heading";
import Image from "./about/Image";
import Content from "./about/Content";
import Button from "./about/Button";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
    <SectionHeading title={"who we are"} subTitle={"discover our identity"}/>
    <div className={Style.wrapper} >
      <div className={Style.container} >
        {AboutData.aboutInnerData.map((item, index) => (
          <div
            ref={ref}
            className={`${Style.aboutinner} ${
              inView ? Style.show : Style.hide
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <Image source={item.logo.path} alt={item.logo.name} />
            <Content heading={item.title} para={item.content} />
            <Button />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default About;

import React, { useEffect, useState } from 'react'
import { TeamData } from '../../../data/home/Data';
import TeamMobile from './team/responsive/TeamMobile';
import Team from './team/Team';
import SectionHeading from '../../sectionHeading/SectionHeading';

const TeamSection = () => {

  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
   <div id='team-section'>
   <SectionHeading title={TeamData.heading} subheading={TeamData.subheading} />
   {screenSize.width <= 880 ? <TeamMobile Teamdata={TeamData.TeamInnerData}/> : <Team Teamdata={TeamData.TeamInnerData}/>}
   
   </div>
  )
}

export default TeamSection
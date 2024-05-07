import { useEffect } from "react";
import Splash from "../components/Splash";
import cheeringCrowd from "../graphics/images/CheeringCrowd.webp";
import teamPhoto from "../graphics/images/GroupPhoto-min.webp";
import heroImage from "../graphics/images/StudentLed.webp";
import { GridContent, GridImage } from "../components/GridBlock";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Splash
        title="OUR TEAM"
        subtitle="Student Led Since 2009"
        image={heroImage}
      />
      <div className="pt-4 pb-4 bg-black grid grid-cols-2 grid-rows-2 gap-0 items-center w-full aspect-[7/5]">
        <GridContent subheading="MISSION" paragraph="Lorem Ipsum" />
        <GridImage image={cheeringCrowd} alt="Cheering Crowd" />
        <GridImage image={teamPhoto} alt="Team Photo" />
        <GridContent subheading="VISION" paragraph="Lorem Ipsum" />
      </div>
    </div>
  );
};

export default OurTeam;

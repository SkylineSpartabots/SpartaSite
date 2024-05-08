import { useEffect } from "react";
import Splash from "../components/Splash";
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
        image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/StuLed"}
      />
      <div className="pt-4 pb-4 bg-black grid grid-cols-2 grid-rows-2 gap-0 items-center w-full aspect-[7/5]">
        <GridContent subheading="MISSION" paragraph="Lorem Ipsum" />
        <GridImage image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Crowd%20New%202024"} alt="Cheering Crowd" />
        <GridImage image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/2024%20Award%201"} alt="Team Photo" />
        <GridContent subheading="VISION" paragraph="Lorem Ipsum" />
      </div>
    </div>
  );
};

export default OurTeam;

import TextSection from "../components/TextSection.js";
import Heading from "../components/Heading.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Heading title="We're the Spartabots" subtitle="FRC Team 2976" />
      <div className="bg-slate-100 flex flex-col gap-8 items-center py-8 justify-center">
        <TextSection
          title="ABOUT US"
          text="Created in 2008, our team participates in the FIRST Robotics
              Competition as team 2976. We are a high school club operating at
              Skyline High School, Sammamish, WA."
        />
        <TextSection
          title="WHAT IS THE FIRST ROBOTICS COMPETITION?"
          text="The FIRST Robotics Competition is an international high school
           robotics competition operated by FIRST. The game of the competition
            changes each year to keep the excitement fresh."
        />
        <TextSection
          title="WHY SHOULD I JOIN?"
          text="Being part of a FIRST
         robotics team is fun! It doesn't matter whether you have experience 
         with robots or not, you'll gain amazing experiences and valuable skills
          you can carry to college, and robotics club also looks great on college
           apps. An article on why robotics matters by team 4073."
        />
        <hr className="py-8 border-black w-[1200px]"></hr>
        <div className="flex flex-row">
          <h1>stuff</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

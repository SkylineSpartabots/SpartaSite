import TextSection from "../components/TextSection.js";
import Heading from "../components/Heading.js";
import InfoBlock from "../components/InfoBlock.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Heading title="THE SPARTABOTS" subtitle="FRC Team 2976" />
      <div className="bg-slate-100 flex flex-col gap-8 items-center p-8">
        <TextSection
          title="ABOUT US"
          text="Created in 2008, our team participates in the FIRST Robotics
              Competition as team 2976. We are a high school club operating at
              Skyline High School, Sammamish, WA."
        />
        <TextSection
          title="WHAT IS FIRST ROBOTICS?"
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
           apps."
        />
        {/* <hr className="py-2 border-gray-300 w-[1000px]"></hr> */}
        <div className="flex flex-row flex-initial px-6 py-8 max-w-[1000px] bg-white rounded gap-4 ">
          <div className="flex flex-row items-center justify-around">
            <InfoBlock
              title="Our Sponsors"
              text="Skyline Robotics couldn't exist without the support of our sponsors, who help us in a variety of ways from granting money to donating parts "
              buttonPath="/sponsors"
            />
            <div className="border-l-[1px] border-gray-300 h-[450px] mx-4"></div>
            <InfoBlock
              title="Community"
              text="Our goal is to raise awareness and interest among the people of our community, about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives. "
              buttonPath="/community"
            />
            <div className="border-l-[1px] border-gray-300 h-[450px] mx-4"></div>
            <InfoBlock
              title="Get Involved"
              text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."
              buttonPath="/get-involved"
            />
          </div>
        </div>

        {/* <hr className="py-2 border-gray-300 w-[1000px]"></hr> */}
      </div>
    </div>
  );
};

export default Home;

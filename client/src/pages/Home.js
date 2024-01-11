import Card from "../components/Card.js";
import Splash from "../components/Splash.js";
import InfoBlock from "../components/InfoBlock.js";
import { useEffect } from "react";
import intakeImage from "../graphics/images/Intake-min.avif";
import groupImage from "../graphics/images/GroupPhoto-min.avif";
import competitionImage from "../graphics/images/Competition-min.avif";
import botImage from "../graphics/images/Bot.avif";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Splash title="THE SPARTABOTS" subtitle="FRC TEAM 2976" image={intakeImage} />
      <div className="bg-slate-100 flex flex-col gap-8 items-center p-8">
        <Card
          title="ABOUT US"
          text="Created in 2008, our team participates in the FIRST Robotics Competition as team 2976. We are a high school club operating at Skyline High School, Sammamish, WA."
          image={groupImage}
        />
        <Card
          title="WHAT IS FIRST ROBOTICS?"
          text="The FIRST Robotics Competition is an international high school robotics competition operated by FIRST. The game of the competition changes each year to keep the excitement fresh."
          image={competitionImage}
        />
        <Card
          title="WHY SHOULD I JOIN?"
          text="Being part of a FIRST robotics team is fun! It doesn't matter whether you have experience with robotics or not, you'll gain amazing experiences and learn valuable skills that you can carry to college and beyond."
          image={botImage}
        />
        <div className="hidden sm:flex flex-row flex-initial px-6 py-8 max-w-[1000px] bg-white rounded gap-4">
          <InfoBlock
            title="Our Sponsors"
            text="Skyline Robotics wouldn't exist without the support of our sponsors, who help us in a variety of ways from granting money to donating parts."
            buttonPath="/sponsors"
          />
          <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>
          <InfoBlock
            title="Community"
            text="Our goal is to raise awareness and interest among the people of our community, about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."
            buttonPath="/about"
          />
          <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>
          <InfoBlock
            title="Get Involved"
            text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."
            buttonPath="/join"
          />
        </div>
        <div className="sm:hidden flex flex-col flex-initial px-8 py-8 w-full items-center bg-white rounded gap-4">
          <InfoBlock
            title="Our Sponsors"
            text="Skyline Robotics couldn't exist without the support of our sponsors, who help us in a variety of ways from granting money to donating parts."
            buttonPath="/sponsors"
          />
          <hr className="w-full flex-1" />
          <InfoBlock
            title="Community"
            text="Our goal is to raise awareness and interest among the people of our community, about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."
            buttonPath="/about"
          />
          <hr className="w-full flex-1" />
          <InfoBlock
            title="Get Involved"
            text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."
            buttonPath="/join"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

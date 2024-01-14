import Splash from "../components/Splash";
import teamNumberImage from "../graphics/images/TeamNumber-min.webp";
import { useEffect } from "react";

const Join = () => {
  // this function scrolls to the top of the page when first navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Splash
        title="JOIN US"
        subtitle="BECOME A SPARTABOT"
        image={teamNumberImage}
      />
      <div className="flex flex-col bg-gray-100 p-8 gap-8 items-center">
        <div className="box">
          <h1 className="title">Students</h1>
          <p className="font-productsans">
            Students are provided with a unique opportunity to develop
            self-confidence, creative thinking, leadership, collaboration and
            teamwork. Robotics provides you with real-world experiences and
            robotics club looks great on resumes!
          </p>
        </div>
        <div className="box">
          <h1 className="title">Why Join?</h1>
          <p className="font-productsans">
            Being part of a FIRST robotics team is fun! You'll gain experiences
            with many other students with similar interests.
            <br />
            <br />
            It doesn't matter whether you are experienced with robots or not,
            you'll gain amazing experiences because your critical thinking, time
            management and reasoning are tested in a time-critical, team-based
            environment. You'll be able to carry these skills to college, and
            robotics club also looks great on college apps.
          </p>
        </div>
        <div className="flex flex-row max-w-[1000px] w-full gap-4">
          <div className="box">
            <h1 className="title">How to Join</h1>
            <p className="font-productsans">
              The best way to join Skyline Robotics is to come see us at the
              club fair! <br />
              <br />
              At our exhibit, you'll get information about what robotics is and
              when the first meeting is. Just attend that first meeting, and
              you're in! There is no prior experience required, so anyone can
              join.
            </p>
          </div>
          <div className="box">
            <h1 className="title">Come In any time!</h1>
            <p className="font-productsans">
              Feel free to come to any meetings. We like to see regular
              commitment, but we understand you have busy lives as students. You
              don't have to attend every meeting, but both the club and your
              learning benefits from regular attendance. We also hope that
              meetings are something you would want to go to!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;

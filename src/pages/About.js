import Heading from "../components/Heading";
import Button from "../components/Button";
import { useEffect } from "react";
import botImage from "../images/Bot2.JPG";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Heading title="ABOUT US" subtitle="THE SPARTABOTS" image={botImage} />
      <div className="bg-slate-100 flex flex-col gap-8 p-8 items-center ">
        <div className="box">
          <h1 className="title">Club Overview</h1>
          <p className="font-productsans text-base ">
            We are the Spartabots, a robotics club participating in the FIRST
            Robotics Competition as team 2976. <br />
            <br />
            Within our completely student built team, we use our problem
            solving, critical thinking and analytical skills to create a
            competitive robot in 6 weeks.
            <br />
            <br /> The club was created in 2008 and initially worked in the
            garage of one of our mentors. In the first few years of the club we
            didn't do so well, but we still always managed to bring a robot to
            the competitions. In our past years, our team never managed to
            advance to the elimination rounds of any competitions. But by 2014,
            the Spartabots made it through two district competitions, getting
            second place in one of them, and qualified for regionals.
          </p>
        </div>
        <div className="box">
          <h1 className="title">Our Mission</h1>
          <p className="font-productsans text-base">
            Our mission is to inspire students in the fields of science,
            technology, engineering and math. We help students cultivate these
            skills through being a part of a supportive team that learns and
            grows together.
          </p>
        </div>
        <div className="box">
          <h1 className="title">Community</h1>
          <p className="font-productsans text-base">
            One of our goals is to raise awareness and interest about our club
            as well as fields in science and technology among the people in our
            community. Partnering with community members and local companies
            allows to raise sufficient funds to support our club mission and
            objectives.
            <br />
            <br /> During the school year, our team participates in local
            elementary school science fairs where younger students can learn
            about our robotics team. Local community festivals such as Salmon
            Days provide us with a great venue to showcase our club. We stay
            active during the summer months by manning a booth at the Issaquah
            Farmer’s Market to raise awareness and create interest in our
            program. This is a great way for the community to see our robots
            first hand. Summer is a fun time for our team to participate in
            local parades and get involved in various community projects where
            we can give back to our community while creating awareness of our
            club. <br />
            <br /> To further our mission and grow our club, we have put
            together various ideas of outreach within our school. We will have a
            presence on our school website and our Facebook page will connect us
            with more students and faculty. Morning school assembly is a great
            place for us to showcase our robot and advertise our club, creating
            awareness and excitement among our students. Posters and flyers are
            being designed and posted at various parts of the school to inform
            and attract new recruits. Our club plans a booth during freshman
            orientation night allowing incoming students to get a preview of our
            club. We are also planning an “Awareness Night”, where we will take
            the opportunity to bring together and thank our school, sponsors and
            dedicated mentors for their hard work and support. Without them our
            team would not exist and we would like to show our appreciation by
            providing a relaxing evening with a presentation of what their
            contributions helped our team achieve.
          </p>
        </div>
        <div className="box">
          <h1 className=" title">Sponsors</h1>
          <p className="font-productsans text-base">
            Skyline Robotics couldn't exist without the support of our sponsors,
            who help us in a variety of ways from granting money to donating
            parts. If you're interested in helping to sponsor our club, please
            send us an email!
          </p>
          <div className="w-fit pt-8 pb-4 mx-auto sm:mx-0">
            <Button text="Sponsors" path="/sponsors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

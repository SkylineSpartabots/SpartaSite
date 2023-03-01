import Heading from "../components/Heading";
import Button from "../components/Button";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Heading title="ABOUT US" subtitle="THE SPARTABOTS" />
      <div className="bg-slate-100 flex flex-col gap-8 items-center p-8">
        <div className="flex-1 py-4 px-6 w-full max-w-[1000px] bg-white rounded gap-4 items-center">
          <h1 className="mx-auto w-fit pb-4 font-scoutcond uppercase font-black text-4xl sm:text-5xl">
            Club Overview
          </h1>
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
        <div className="flex-1 px-6 py-4 w-full max-w-[1000px] bg-white rounded gap-4 items-center">
          <h1 className="mx-auto w-fit font-scoutcond uppercase pb-4 font-black text-4xl sm:text-5xl">
            Our Mission
          </h1>
          <p className="font-productsans text-base text-center">
            Our mission is to inspire students in the fields of science,
            technology, engineering and math. We help students cultivate these
            skills through being a part of a supportive team that learns and
            grows together.
          </p>
        </div>
        <div className="flex-1 px-6 py-4 w-full max-w-[1000px] bg-white rounded gap-4 items-center">
          <h1 className="mx-auto w-fit font-scoutcond uppercase pb-4 font-black text-4xl sm:text-5xl">
            Sponsors
          </h1>
          <p className="font-productsans text-base text-center">
            Skyline Robotics couldn't exist without the support of our sponsors,
            who help us in a variety of ways from granting money to donating
            parts. If you're interested in helping to sponsor our club, please
            send us an email!
          </p>
          <div className="mx-auto w-fit pt-8 pb-4">
            <Button text="Sponsors" path="/sponsors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

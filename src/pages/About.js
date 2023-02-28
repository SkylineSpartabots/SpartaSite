import Heading from "../components/Heading";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Heading title="ABOUT US" subtitle="The Spartabots" />
      <div className="bg-slate-100 flex flex-col gap-8 items-center p-8">
        <div className="flex flex-row flex-1 px-6 py-4 w-[1000px] bg-white rounded gap-4 min-h-[300px]">
          <h1>Our Mission</h1>
        </div>
      </div>
    </div>
  );
};

export default About;

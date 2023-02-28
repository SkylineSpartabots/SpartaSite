import Heading from "../components/Heading";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Heading title="ABOUT US" subtitle="The Spartabots" />
    </div>
  );
};

export default About;

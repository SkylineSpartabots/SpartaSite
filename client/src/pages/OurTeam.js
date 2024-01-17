import { useEffect } from "react";
import LazyImage from "../components/LazyImage";
import SubtleSplash from "../components/SubtleSplash";
import cheeringCrowd from "../graphics/images/CheeringCrowd.webp";
import teamPhoto from "../graphics/images/GroupPhoto-min.webp";
import heroImage from "../graphics/images/StudentLed.webp";

const GridBlock = ({ content }) => {
  return <div className="w-full h-full">{content}</div>;
};

const GridContent = ({ subheading, paragraph }) => {
  return (
    <GridBlock
      content={
        <div className="flex flex-col gap-2 md:gap-3 md:pl-8 md:pt-6 md:pr-6 md:pb-8 p-4">
          <h2 className="text-3xl md:text-5xl font-scoutcond font-semibold text-white">
            {subheading}
          </h2>
          <p className="font-productsans text-white text-justify text-sm md:text-base xl:text-xl">
            {paragraph}
          </p>
        </div>
      }
    />
  );
};

const GridImage = ({ image, alt }) => {
  return (
    <GridBlock
      content={
        <LazyImage
          img={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      }
    />
  );
};

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SubtleSplash
        title="STUDENT LED SINCE 2009"
        subtitle="Our Team"
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

import { useEffect, useRef, useState } from "react";
import Card from "../components/Card.js";
import InfoBlock from "../components/InfoBlock.js";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons';

const LazyVideo = ({src, type, className, autoPlay, loop, muted, playsInline}) => {
  const videoRef = useRef();
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State for video playback

  useEffect(() => {
    const videoRefCurrent = videoRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (videoRefCurrent) {
      observer.observe(videoRefCurrent);
    }

    return () => {
      if (videoRefCurrent) {
        observer.unobserve(videoRefCurrent);
      }
      observer.disconnect();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
      <div>
        <video
            ref={videoRef}
            src={visible ? src : ""}
            type={type}
            className={className}
            autoPlay={autoPlay}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
        />
        {visible && (
            isPlaying
        )}
        <button style={{
          position: "absolute",
          bottom: 50,
          right: 50,
          fontSize: '2em',
          color: 'white',
          zIndex:"0"
        }} 
        aria-label="play and pause button"
        onClick={togglePlayback}>
          <FontAwesomeIcon icon={isPlaying ? faPlay : faPause}/>
        </button>
      </div>

  );
};

const Splash = ({ title, subtitle, video }) => {
  return (
    <div className="min-h-screen relative">
      {/* Video */}
      <LazyVideo
        src={video}
        type="video/mp4"
        className="object-cover h-full w-full absolute z-0"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Text */}
      <div className="absolute bottom-0 left-0 py-24 sm:px-16 sm:py-16 max-w-full">
        <h1 className={`text-6xl sm:text-6xl text-left font-productsans bold font-extrabold text-transparent bg-clip-text text-white px-5`}>
          {title}
        </h1>
        <h1 className={`text-left text-5xl sm:text-7xl md:text-8xl font-avenir bold font-extrabold text-transparent bg-clip-text text-white px-5 max-w-full`}>
          {subtitle}
        </h1>
      </div>
    </div>
  );
};
const Home = () => {

  const [themebool, setthemebool] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setthemebool(JSON.parse(localStorage.getItem("theme")))
  })
  

  return (
    <div className="overflow-hidden">
      <Splash title="TEAM 2976" subtitle="THE SPARTABOTS" video={"https://res.cloudinary.com/spartasite/video/upload/f_auto:video,q_auto/BRoll"} />
      <div className={`${themebool?"bg-slate-100":"bg-[#141414]"} flex flex-col gap-8 items-center p-8`}>
        <Card col={themebool?"black":"white"} bg={themebool?"white":"black"}
          title="ABOUT US"
          text="The Spartabots were founded in 2008 at Skyline High School located in Sammamish, WA. We participate in the FIRST Robotics Competition as Team 2976 and we operate as a high school club."
          image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/yanda"}
          alt="Group photo of the Spartabots team"
        />
        <Card col={themebool?"black":"white"} bg={themebool?"white":"black"}
          title="WHAT IS FIRST ROBOTICS?"
          text="FRC stands for the FIRST Robotics Competition, which is an international high school robotics competition operated by FIRST (For Inspiration and Recognition of Science and Technology). The game of the competition changes each year to keep the excitement fresh and keep teams innovating. The game for 2025 is called REEFSCAPE."
          image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/CRESENDO%20Game"}
          alt="Wide shot of the FIRST Robotics Competition"
          allowLinks="true"
        />
        <Card col={themebool?"black":"white"} bg={themebool?"white":"black"}
          title="WHY SHOULD I JOIN?"
          text="Being part of a FIRST robotics team is fun! It doesn't matter whether you have experience with robotics or not, you'll gain amazing experiences and learn valuable skills that you can carry to college and beyond."
          image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20In%20Game"}
          alt="Picture of the CHRONOS bot"
        />
        <div style={{ backgroundColor: themebool?"white":"black" }} className="hidden sm:flex flex-row flex-initial px-6 py-8 max-w-[1000px] rounded-2xl gap-4">
          <InfoBlock col={themebool?"black":"white"} bg={themebool?"white":"black"}
            title="Our Sponsors"
            text="The Spartabots wouldn't exist without the support of our gracious sponsors, who help us in a variety of ways from granting money to donating parts."
            buttonPath="/sponsors"
          />
          <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>
          <InfoBlock col={themebool?"black":"white"} bg={themebool?"white":"black"}
            title="Community"
            text="Our goal is to raise awareness and interest among the people of our community about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."
            buttonPath="/about"
          />
          <div className="border-l-[1px] border-gray-300 min-h-[350px] mx-4"></div>
          <InfoBlock col={themebool?"black":"white"} bg={themebool?"white":"black"}
            title="Get Involved"
            text="We are always looking for any help within the club. Whether it be new students to join us, new mentors, or new sponsors to support our team."
            buttonPath="/join"
          />
        </div>
        <div className="sm:hidden flex flex-col flex-initial px-8 py-8 w-full items-center bg-white rounded-2xl gap-4">
          <InfoBlock
            title="Our Sponsors"
            text="The Spartabots wouldn't exist without the support of our gracious sponsors, who help us in a variety of ways from granting money to donating parts."
            buttonPath="/sponsors"
          />
          <hr className="w-full flex-1" />
          <InfoBlock
            title="Community"
            text="Our goal is to raise awareness and interest among the people of our community about our club as well as the field of science and technology. Partnering with community members and local companies will allow us to raise sufficient funds to support our club mission and objectives."
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

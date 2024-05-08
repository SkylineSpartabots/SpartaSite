import { useEffect } from "react";
import Card from "../components/Card.js";
import HeaderBlock from "../components/HeaderBlock.js";

const Software = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="bg-slate-100 flex flex-col gap-8 items-center p-8">
        <br/>
        <HeaderBlock text="Software References"/>
        <Card
          title="Robot"
          text="The robot code is what controls the robots. During Auto, the code runs through pre-programmed paths while in tele-op the code binds remote control signals to actions on the robot. The source code of the robot can be found on [https://github.com/SkylineSpartabots/Artemis](GitHub). Download WPILib from the [https://github.com/wpilibsuite/allwpilib/releases/tag/v2024.1.1](official GitHub page)."
          image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/Artemis%20In%20Game"}
          alt="Spartabots' FRC robot"
          allowLinks="true"
        />
        <Card
          title="Website"
          text="The website is the current website you are on right now. The production site is at [https://spartabots.org/](spartabots.org) while the development site is at [https://spartasite.gam3rr.me/](spartasite.gam3rr.me). The source code of the website can be found on [https://github.com/SkylineSpartabots/SpartaSite/tree/revamp](GitHub)."
          image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/LeadWatch"}
          alt="Wide shot of the FIRST Robotics Competition"
          allowLinks="true"
        />
        <Card
          title="Simulation"
          text="Simulations are for creating auto-paths and testing the software without needing the physical robot. We use [https://github.com/Mechanical-Advantage/AdvantageScope/releases/tag/v3.0.1](AdvantageScope) which connects to WPILib. More info can be found at [https://docs.google.com/document/d/1ANKAKJScdWes4DSLoNNRVccjzPH2LrzKqhP18Oacw00/](Google Doc)" /* should we copy this to the website or leave on Google Doc? */
          image={"https://res.cloudinary.com/spartasite/image/upload/f_auto,q_auto/2024%20Award%201"}
          alt="Spartabots members"
          allowLinks="true"
        />
      </div>
    </div>
  );
};

export default Software;

import { useEffect } from "react";
import Splash from "../components/Splash";
import heroImage from "../graphics/images/Bot3.webp"; 
import ChronosPhoto from "../graphics/images/Chronos.webp";
import Card from "../components/Card";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Splash
        title="HISTORY"
        subtitle="2009 — 2024"
        image={heroImage}
      />
      <div className="bg-slate-100 flex flex-col gap-8 items-center p-8">
        <Card
          title="2022 — Chronos"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={ChronosPhoto}
          alt="2022 FRC robot named chronos"
        />
        <Card
          title="2023 — Zeus"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={ChronosPhoto}
          alt="2023 FRC robot named zeus"
        />
        <Card
          title="2024 — Artemis"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={ChronosPhoto}
          alt="2024 FRC robot named artemis"
        />
      </div>
    </div>
  );
};

export default OurTeam;
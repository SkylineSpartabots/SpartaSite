import { useEffect } from "react";
import Splash from "../components/Splash";
import heroImage from "../graphics/images/tuffbot.webp"; 
import ChronosPhoto from "../graphics/images/Chronos.webp";
import ArtemisPhoto from "../graphics/images/Artemis.JPG"
import ZeusPhoto from "../graphics/images/Zeus2023.webp"
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
          text="Chronos was Spartabots 2022 competition robot for the FIRST challenge RAPID REACT, this robot made it to World's in the Hopper divison as a Semi-Finalist. ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎ ‎ ‎ ‎  Status: Decommissioned"
          image={ChronosPhoto}
          alt="2022 FRC robot named chronos"
        />
        <Card
          title="2023 — Zeus"
          text="Zeus was The Spartabot's 2023 robot for the FIRST FRC Challenge CHARGED UP, this robot was apart of Alliance 5 at Sammamish and Alliance 6 at Glacier Peak!  ‎  ‎  ‎  ‎ ‎    ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎   ‎   ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎‎ ‎  ‎  ‎  ‎  ‎ ‎‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ ‎  ‎  ‎  ‎  ‎  ‎ Status: Decommissioned"
          image={ZeusPhoto}
          alt="2023 FRC robot named zeus"
        />
        <Card
          title="2024 — Artemis"
          text="Artemis is Spartabot's current robot for the FIRST Challenge CRESENDO, this robot was an Event Finalist at Auburn and a Semi-Finalist at Sammamish!‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎‎  ‎  ‎  ‎  ‎  ‎  ‎ Status: In Use"
          image={ArtemisPhoto}
          alt="2024 FRC robot named artemis"
        />
      </div>
    </div>
  );
};

export default OurTeam;
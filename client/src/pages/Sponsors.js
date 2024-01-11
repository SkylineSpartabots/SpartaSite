import { useEffect } from "react";
import HeaderBlock from "../components/HeaderBlock";
import MicrosoftLogo from "../graphics/svgs/Microsoft_Logo.svg";
import BoeingLogo from "../graphics/svgs/Boeing_Logo.svg";
import TMobileLogo from "../graphics/images/t-mobile_logo.jpg";
import FirstTechLogo from "../graphics/svgs/First_Tech_Logo.svg";
import GeneHaasLogo from "../graphics/svgs/Gene_Haas_Logo.svg";
import ISFLogo from "../graphics/svgs/ISF_Logo.svg";
import LowesLogo from "../graphics/svgs/Lowes_Logo.svg";
import OdeszaLogo from "../graphics/svgs/ODESZA_Logo.svg";
import FirstWALogo from "../graphics/images/firstwalogo.png";
import HCLLogo from "../graphics/images/HCL.png";
import WashingtonBusinessWeekLogo from "../graphics/images/WashingtonBusinessWeek.png";
import TraderJoeLogo from "../graphics/images/TraderJoes.png";
import LegendaryDonutsLogo from "../graphics/images/LegendaryDonuts.png";
import CrumblLogo from "../graphics/images/Crumbl.png";
import QFCLogo from "../graphics/images/QFC.png";
import FirstTechBWLogo from "../graphics/svgs/FirstTechBW.svg";

const Sponsors = () => {
  // this function scrolls to the top of the page when first navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logos = [
    FirstWALogo,
    FirstTechLogo,
    TMobileLogo,
    BoeingLogo,
    OdeszaLogo,
    MicrosoftLogo,
    GeneHaasLogo,
    LowesLogo,
    ISFLogo,
    HCLLogo,
    WashingtonBusinessWeekLogo,
    TraderJoeLogo,
    LegendaryDonutsLogo,
    CrumblLogo,
    QFCLogo,
    FirstTechBWLogo,
  ];

  return (
    <div className="pt-[135px] pb-8 bg-slate-100 flex flex-col items-center gap-8">
      <HeaderBlock text={"Sponsors"}/>
      <div className="box flex flex-col items-center">
        <h1 className="flex-initial font-scountcond font-black text-5xl mx-auto w-fit pb-4 italic">
          2024
        </h1>
        <div className=" flex-initial flex flex-row flex-wrap gap-8 px-12 justify-center">
          {/* loop through all the logos, creating an image tag for each */}
          {logos.map((logo, index) => (
            <img
              src={logo}
              className="flex-initial max-h-[60px] sm:max-h-[125px] "
              alt=""
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

import { useEffect } from "react";
import HeaderBlock from "../components/HeaderBlock";
import MicrosoftLogo from "../graphics/images/Microsoft_Logo.webp";
import BoeingLogo from "../graphics/images/Boeing_Logo.webp";
import TMobileLogo from "../graphics/images/t-mobile_logo.webp";
import FirstTechLogo from "../graphics/images/First_Tech_Logo.webp";
import GeneHaasLogo from "../graphics/images/Gene_Haas_Logo.webp";
import ISFLogo from "../graphics/images/ISF_Logo.webp";
import LowesLogo from "../graphics/images/Lowes_Logo.webp";
import OdeszaLogo from "../graphics/images/ODESZA_Logo.webp";
import FirstWALogo from "../graphics/images/firstwalogo.webp";
import HCLLogo from "../graphics/images/HCL.webp";
import WashingtonBusinessWeekLogo from "../graphics/images/WashingtonBusinessWeek.webp";
import TraderJoeLogo from "../graphics/images/TraderJoes.webp";
import LegendaryDonutsLogo from "../graphics/images/LegendaryDonuts.webp";
import CrumblLogo from "../graphics/images/Crumbl.webp";
import QFCLogo from "../graphics/images/QFC.webp";
import FirstTechBWLogo from "../graphics/images/FirstTechBW.webp";

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
              alt="Sponsor"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

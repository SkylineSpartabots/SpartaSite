import { useEffect } from "react";
import MicrosoftLogo from "../graphics/svgs/Microsoft_Logo.svg";
import BoeingLogo from "../graphics/svgs/Boeing_Logo.svg";
import TMobileLogo from "../graphics/svgs/T-Mobile_Logo.svg";
  import FirstTechLogo from "../graphics/svgs/First_Tech_Logo.svg";
import GeneHaasLogo from "../graphics/svgs/Gene_Haas_Logo.svg";
import ISFLogo from "../graphics/svgs/ISF_Logo.svg";
import LowesLogo from "../graphics/svgs/Lowes_Logo.svg";
import OdeszaLogo from "../graphics/svgs/ODESZA_Logo.svg";
import FirstWALogo from "../graphics/images/firstwalogo.png";
import HCLLogo from "../graphics/images/HCL.png"
import WashingtonBusinessWeekLogo from "../graphics/images/WashingtonBusinessWeek-Transparent.png";
import TraderJoeLogo from "../graphics/images/TraderJoes.png";
import LegendaryDonutsLogo from "../graphics/images/LegendaryDonuts.png"
import CrumblLogo from "../graphics/images/Crumbl-Transparent.png"
import QFCLogo from "../graphics/images/QFC.png"
  import FirstTechBWLogo from "../graphics/svgs/FirstTechBW.svg"

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
    FirstTechBWLogo
  ];

  return (
    <div className="pt-[135px] p-8 bg-gray-700 flex flex-col items-center gap-8">
      <div className="max-w-[1000px] flex-1 w-full text-center bg-gray-600 rounded-lg my-4 p-4">
        <h1 className="mx-auto w-fit font-scoutcond font-black uppercase text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
          Sponsors
        </h1>
      </div>
      <div className="items-center max-w-[1000px] bg-slate-300 rounded-lg">
        <h1 className="flex-initial my-4 font-scountcond font-black text-5xl mx-auto w-fit italic">
          2023
        </h1>
        <div className=" flex-initial flex flex-row flex-wrap gap-8 my-4 px-12 p-4 justify-center">
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

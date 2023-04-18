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
  ];

  return (
    <div className="pt-[135px] p-8 bg-gray-100 flex flex-col items-center gap-8">
      <div className="max-w-[1000px] flex-1 w-full text-center bg-gray-700 rounded p-4">
        <h1 className="mx-auto w-fit font-scoutcond font-black uppercase text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
          Sponsors
        </h1>
      </div>
      <div className="box flex flex-col items-center">
        <h1 className="font-scountcond font-black text-5xl mx-auto w-fit pb-4 italic">
          2023
        </h1>
        <div className="flex flex-row flex-wrap gap-8 px-12 justify-center">
          {/* loop through all the logos, creating an image tag for each */}
          {logos.map((logo, index) => (
            <img
              src={logo}
              className="max-h-[125px] max-w-[700px] object-cover h-full"
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

import { useEffect } from "react";
import Microsoft from "../images/microsoft.svg";
import TMobile from "../images/TMobile.webp";
import FirstTech from "../images/FirstTechBW.svg";
import Obesza from "../images/Obesza.png";
import GeneHaas from "../images/GeneHaasFoundation.png";
import HCL from "../images/HCL.png"
import Lowes from "../images/Lowes.png"
import WashingtonBusinessWeek from "../images/WashingtonBusinessWeek.png";
import TraderJoe from "../images/TraderJoes.png";
import LegendaryDonuts from "../images/LegendaryDonuts.png"
import Crumbl from "../images/Crumbl.png"
import QFC from "../images/QFC.png"

const Sponsors = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[135px] p-8 bg-gray-100 flex flex-col items-center gap-8">
      <div className="max-w-[1000px] flex-1 w-full text-center bg-gray-700 rounded p-4">
        <h1 className="mx-auto w-fit font-scoutcond font-black uppercase text-6xl italic text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
          Sponsors
        </h1>
      </div>
      <div className="box flex flex-row flex-wrap items-center gap-4 justify-center space-y-4">
        <h1 className="font-scountcond font-black text-5xl w-full text-center">
          2023
        </h1>
        {/* <div className="font-productsans text-center text-emerald-800 text-5xl">Microsoft Corporation</div> */}
        <img
          src={Microsoft}
          className="w-full max-w-[300px] h-full"
          alt="Microsoft Logo"
        />
        <span className="w-[10px]" />
        <img
          src={TMobile}
          className="w-full max-w-[300px] h-full"
          alt="T-Mobile Logo"
        />
        <span className="w-[10px]" />
        <img
          src={FirstTech}
          className="w-full max-w-[300px] h-full"
          alt="First Tech Credit Union Logo"
        />
        <span className="w-[10px]" />
        <img
          src={Obesza}
          className="w-full max-w-[200px] h-full"
          alt="Obesza Logo"
        />
        <span className="w-[10px]" />
        <img
          src={GeneHaas}
          className="w-full max-w-[200px] h-full"
          alt="Gene Haas Foundation Logo"
        />
        {/* <span className="w-[10px]" /> */}
        <img
          src={HCL}
          className="w-full max-w-[300px] h-full"
          alt="HCL Logo"
        />
        <span className="w-[10px]" />
        <img
          src={Lowes}
          className="w-full max-w-[300px] h-full"
          alt="Lowes Logo"
        />
        <span className="w-[10px]" />
        <img
          src={WashingtonBusinessWeek}
          className="w-full max-w-[200px] h-full"
          alt="Washington Business Week Logo"
        />
        <span className="w-[10px]" />
        <img
          src={TraderJoe}
          className="w-full max-w-[400px] h-full"
          alt="Trader Joe's Logo"
        />
        <span className="w-[10px]" />
        <img
          src={LegendaryDonuts}
          className="w-full max-w-[500px] h-full"
          alt="Legendary Donuts Logo"
        />
        <span className="w-[10px]" />
        <img
          src={Crumbl}
          className="w-full max-w-[300px] h-full"
          alt="Crumbl Logo"
        />
        <span className="w-[10px]" />
        <img
          src={QFC}
          className="w-full max-w-[200px] h-full"
          alt="QFC Logo"
        />
        <span className="w-[10px]" />
      </div>
      
     </div>
  );
};

export default Sponsors;

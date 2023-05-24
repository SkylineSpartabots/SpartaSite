
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import CoolNavbarTab from './CoolNavbarTab.js';
import { Link, useLocation } from "react-router-dom";
import Team2976Logo from "../graphics/svgs/Team2976_Logo.svg"
const CoolNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let location = useLocation();
  console.log(location)
  
  return (
    <div
      className={`${
        menuOpen ? "h-[300px] " : ""
      }flex flex-col  z-20 px-2 sm:px-[40px] py-2 w-full text-black bg-white`}
    >
       <nav className='flex flex-row justify-between'>
        <div className="">
          <Link to={"/"} className="flex flex-row text-black transition duration-300 group hover:scale-110">
            <img src={Team2976Logo} className="w-20"></img>
            <h1 className= "pt-5 text-4xl font-black font-scoutcond ">
            SPARTABOTS 2976
          </h1>
          </Link>
        </div>
        
        <div className="flex-row flex-wrap items-center justify-around flex-initial hidden gap-2 rounded sm:flex">
          <CoolNavbarTab text="HOME" path="/" isActive={location.pathname=="/"}/>
          <CoolNavbarTab text="ABOUT" path="/about" isActive={location.pathname=="/about"}/>
          <CoolNavbarTab text="JOIN" path="/join" isActive={location.pathname=="/join"}/>
          {/* <NavbarTab text="Font Demo" path="/fontDemo" /> */}
        </div>
        <div className="flex items-center justify-end flex-1 sm:hidden">
          {menuOpen ? (
            <GrClose
              className="w-10 h-10 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          ) : (
            <FiMenu
              className="w-10 h-10 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
          )}
        </div>
      </nav>
      <div
        className={`${
          menuOpen ? "flex flex-col" : "hidden"
        } sm:hidden pt-4 w-full bg-gradient-to-r items-center from-frcpurple to-frcyellow`}
      >
        <CoolNavbarTab
          text="Home"
          path="/"
          onClick={() => setMenuOpen((prev) => false)}
        />
        <CoolNavbarTab
          text="About"
          path="/about"
          onClick={() => setMenuOpen((prev) => false)}
        />
        <CoolNavbarTab
          text="Join"
          path="/join"
          onClick={() => setMenuOpen((prev) => false)}
        />
        {/* <NavbarTab
          text="Font Demo"
          path="/fontDemo"
          onClick={() => setMenuOpen((prev) => false)}
        /> */}
      </div>
    </div>
  );
};

export default CoolNavbar

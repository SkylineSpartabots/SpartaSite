
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import CoolNavbarTab from './CoolNavbarTab.js';

const CoolNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${
        menuOpen ? "h-[300px] " : ""
      }flex flex-col  z-20 px-2 sm:px-[75px] py-4 sm:py-6 w-full h-[90px] text-black bg-white`}
    >
      <nav className={`flex flex-row items-center justify-between`}>
        <h1 className="font-scoutcond font-black text-4xl hover:underline ">
          SPARTABOTS 2976
        </h1>
        <div className="hidden sm:flex flex-row flex-wrap flex-initial items-center gap-2 justify-around rounded">
          <CoolNavbarTab text="Home" path="/" />
          <CoolNavbarTab text="About" path="/about" />
          <CoolNavbarTab text="Join" path="/join" />
          {/* <NavbarTab text="Font Demo" path="/fontDemo" /> */}
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
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

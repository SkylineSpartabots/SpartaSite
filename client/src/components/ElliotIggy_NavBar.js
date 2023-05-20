import NavbarTab from "./NavbarTab";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import EINavbarTab from "./ElliotIggy_NavBarTab"
import { Link } from "react-router-dom"
import SpartanLogo from "../graphics/svgs/SpartanLogo.svg"
import goatHead from "../graphics/svgs/Spartagoat-Head-01.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${
        menuOpen ? "h-[300px]" : ""
      }flex flex-col absolute z-20 px-4 sm:px-[75px] py-4 my-4 sm:py-6 w-full text-white  rounded-lg mx-4`}
    >
      <nav className={"flex flex-row items-center justify-between"}>
      <div className="flex flex-row">
          <Link to={"/"} className="">
            <img src={goatHead} className="w-24 h-20"></img>
          </Link>
          <h1 className="font-scoutcond font-black text-4xl py-7">
            SPARTABOTS 2976
          </h1>
        </div>
        <div className="hidden sm:flex flex-row flex-wrap flex-initial items-center gap-2 justify-around rounded">
          <EINavbarTab text="Home" path="/" /> { /*CHANGE TO SEE NAVBAR */}
          <EINavbarTab text="About" path="/about" /> { /*CHANGE TO SEE NAVBAR */}
          <EINavbarTab text="Join" path="/join" /> { /*CHANGE TO SEE NAVBAR */}
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
        <EINavbarTab
          text="Home"
          path="/"
          onClick={() => setMenuOpen((prev) => false)}
        />
        <EINavbarTab 
          text="About"
          path="/about"
          onClick={() => setMenuOpen((prev) => false)}
        />
        <EINavbarTab
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

export default Navbar;

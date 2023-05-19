import NavbarTab from "./NavbarTab";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom/dist";
import SpartabotsLogo from "../graphics/svgs/Team2976_Logo.svg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`${
        menuOpen ? "h-[300px]" : ""
      }flex flex-col absolute z-50 px-2 sm:px-[75px] py-4 sm:py-6 w-full text-white bg-white`}
    >
      <nav className={`flex flex-row items-center justify-between`}>
        <Link to={"/"} className="flex items-center justify-center rounded-xl">
          <img src={SpartabotsLogo} className="h-[70px] rounded-xl hover:bg-frcgreen"></img>
        </Link>

        <div className="flex-row flex-wrap items-center justify-around flex-initial hidden gap-2 rounded sm:flex">
          <NavbarTab text="Home" path="/" />
          <NavbarTab text="About" path="/about" />
          <NavbarTab text="Join" path="/join" />
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
        <NavbarTab
          text="Home"
          path="/"
          onClick={() => setMenuOpen((prev) => false)}
        />
        <NavbarTab
          text="About"
          path="/about"
          onClick={() => setMenuOpen((prev) => false)}
        />
        <NavbarTab
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

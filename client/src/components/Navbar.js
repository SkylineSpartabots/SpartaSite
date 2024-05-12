import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import useIsMobile from "../hooks/useIsMobile";

const NavbarItem = ({ path, name, loc }) => {
  return (
    <Link
      className="font-semibold text-base md:text-xl whitespace-nowrap no-underline text-white m-3 mt-4"
      to={path}
    >
      {name}
      {loc.pathname.toLowerCase() === path.toLowerCase() && (
        <hr className="w-full"></hr>
      )}
    </Link>
  );
};
//         <NavbarItem path="/ourteam" name="Our Team" loc={location} />  (use once page setup)
const Navbar = () => {
  let location = useLocation();

  const { handleShowMenu, showMenu } = useIsMobile();

  return (
    <nav className="flex absolute top-0 w-full black-fade-top z-10">
      <a
        href="/"
        className="text-2xl md:text-3xl font-scoutcond italic font-extrabold whitespace-nowrap text-white ml-6 mt-3 h-fit"
      >
        THE SPARTABOTS
      </a>
      <div className={`${showMenu ? "top-[0] opacity-100" : "top-[-440%] opacity-0"} transition-all flex absolute flex-col justify-center items-center sm:items-start  sm:flex-row sm:top-0 w-full sm:gap-4 backdrop-blur-2xl sm:backdrop-blur-none  h-[350px] sm:h-fit sm:bg-transparent sm:justify-end z-0`}>
        <NavbarItem path="/" name="Home" loc={location} />
        <NavbarItem path="/history" name="History" loc={location} />
        <NavbarItem path="/sponsors" name="Sponsors" loc={location} />
        <NavbarItem path="/join" name="Join" loc={location} />
        {/* The break fixes the spacing. */}
        <br />
      </div>
     <BiMenu className="text-white text-4xl ml-auto mt-2 mr-4 cursor-pointer sm:hidden" onClick={handleShowMenu}/>
    </nav>
  );
};


export default Navbar;

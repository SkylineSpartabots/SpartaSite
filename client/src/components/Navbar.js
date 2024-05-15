import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import useIsMobile from "../hooks/useIsMobile";

const NavbarItem = ({ path, name, loc }) => {
  return (
    <Link
      className="font-semibold text-[26px] md:text-xl whitespace-nowrap no-underline text-white m-3 mt-4"
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
    <nav className="flex absolute top-0 w-full black-fade-top z-10 font-[Helvetica]">
      <a
        href="/"
        className="text-2xl md:text-3xl font-scoutcond italic z-[-20] font-extrabold whitespace-nowrap text-white ml-6 mt-3 h-fit"
      >
        THE SPARTABOTS
      </a>
      <div className={`${showMenu ? "top-0 right-[0px] opacity-100" : "top-0 right-0 opacity-0"} rounded-l-xl flex sm:absolute flex-col justify-center items-center sm:items-start sm:flex-row sm:top-0 w-[280px] fixed sm:gap-4 bg-[#161b22] h-[610px] sm:h-fit sm:bg-transparent sm:justify-end z-0 gap-5`}>
        <NavbarItem path="/" name="Home" loc={location} />
        <NavbarItem path="/history" name="History" loc={location} />
        <NavbarItem path="/sponsors" name="Sponsors" loc={location} />
        <NavbarItem path="/join" name="Join" loc={location} />
        {/* The break fixes the spacing. */}
        <br />
      </div>
     <BiMenu className="text-white text-4xl ml-auto mt-2 mr-4 cursor-pointer fixed right-0 sm:hidden" onClick={handleShowMenu}/>
    </nav>
  );
};


export default Navbar;

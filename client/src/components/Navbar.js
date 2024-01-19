import React from "react";
import { Link, useLocation } from "react-router-dom";

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

const Navbar = () => {
  let location = useLocation();
  return (
    <nav className="flex fixed top-0 w-full black-fade-top z-10">
      <a
        href="/"
        className="text-2xl md:text-3xl font-scoutcond italic font-extrabold whitespace-nowrap text-white ml-6 mt-3"
      >
        THE SPARTABOTS
      </a>
      <div className="flex top-0 w-full gap-4 justify-end">
        <NavbarItem path="/" name="Home" loc={location} />
        <NavbarItem path="/ourteam" name="Our Team" loc={location} />
        <NavbarItem path="/history" name="History" loc={location} />
        <NavbarItem path="/sponsors" name="Sponsors" loc={location} />
        <NavbarItem path="/join" name="Join" loc={location} />
        {/* The break fixes the spacing. */}
        <br />
      </div>
    </nav>
  );
};


export default Navbar;

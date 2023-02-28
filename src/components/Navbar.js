import NavbarTab from "./NavbarTab";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed flex flex-row items-center justify-between w-full bg-gradient-to-r from-frcpurple to-frcyellow z-10 px-4 sm:px-[75px] py-4 sm:py-[0.75rem]">
      <h1 className="font-scoutcond font-black text-4xl sm:text-5xl text-center text-white">
        SPARTABOTS 2976
      </h1>
      <div className="hidden sm:flex flex-row flex-wrap flex-initial items-center gap-2 justify-around p-4 rounded">
        <NavbarTab text="Home" path="/" />
        <NavbarTab text="About" path="/about" />
        <NavbarTab text="Font Demo" path="/fontDemo" />
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {menuOpen ? (
          <GrClose
            className="w-10 h-10 cursor-pointer text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        ) : (
          <FiMenu
            className="w-10 h-10 text-white cursor-pointer"
            onCLick={() => setMenuOpen((prev) => !prev)}
          />
        )}
      </div>
      <div className={`${menuOpen ? "flex flex-col" : "hidden"} sm:hidden `}>
        <h1>menu</h1>
      </div>
    </nav>
  );
};

export default Navbar;

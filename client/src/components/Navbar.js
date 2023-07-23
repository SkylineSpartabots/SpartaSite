import NavbarTab from "./NavbarTab";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useLogout();
  let location = useLocation();
  const { user } = useAuthContext();

  return (
    <div
      className={`${
        menuOpen ? "h-[300px]" : ""
      }flex flex-col absolute z-20 px-4 sm:px-[75px] py-4 sm:py-6 w-full text-white`}
    >
      <nav className="flex flex-row items-center justify-between">
        <h1
          className={`font-scoutcond font-black text-4xl sm:text-5xl text-center ${
            location.pathname === "/hours" ||
            location.pathname === "/sponsors" ||
            location.pathname === "/login"
              ? "text-black"
              : "text-white"
          }`}
        >
          SPARTABOTS 2976
        </h1>
        <div className="hidden sm:flex flex-row flex-wrap flex-initial items-center gap-2 justify-around rounded">
          <NavbarTab text="Home" path="/" />
          <NavbarTab text="About" path="/about" />
          <NavbarTab text="Join" path="/join" />
          {!user ? (
            <NavbarTab text="Login" path="/login" />
          ) : (
            <button
              className={`transition-all delay-150 bg-size-200 bg-pos-0 hover:bg-pos-100 duration-300 bg-gradient-to-r from-frcpink via-frcyellow to-frcpurple font-productsans font-bold text-sm px-5 mr-2 mb-2 flex-initial block text-center text-md rounded text-white w-[100px] py-4 

hover:scale-110`}
              onClick={logout}
            >
              Log Out
            </button>
          )}

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

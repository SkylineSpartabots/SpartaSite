import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CoolNavbarTab = ({ path, text, onClick, isActive }) => {
  return (
    <Link
      to={path}
      className={`block px-3 mx-5 text-base font-bold text-center text-black transition-all duration-150 ease-in-out rounded font-productsans group ` + (isActive ? "shadow-xl shadow-frcgreen" : "text-black")}
      onClick={onClick}
      
    >
      <span className="bg-left-bottom bg-gradient-to-r from-limegreenaccent to-limegreenaccent bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-200 ease-in-out">{text}</span>
      {/* {location.pathname === path ? <hr className="w-16 mx-auto"></hr> : <></>} */}
    </Link>
  );
};

export default CoolNavbarTab;

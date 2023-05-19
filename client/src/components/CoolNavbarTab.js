import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CoolNavbarTab = ({ path, text, onClick }) => {
  const activelink = ''
  const normallink = ''
  
  let location = useLocation();
  return (
    <Link
      to={path}
      className={`font-productsans font-bold text-base px-3 mx-5 block text-center rounded text-black
      group transition-all duration-150 ease-in-out


        `}
      onClick={onClick}
      
    >
      <span className="bg-left-bottom bg-gradient-to-r from-limegreenaccent to-limegreenaccent bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-200 ease-in-out">{text}</span>
      {/* {location.pathname === path ? <hr className="mx-auto w-16"></hr> : <></>} */}
    </Link>
  );
};

export default CoolNavbarTab;

import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const CoolNavbarTab = ({ path, text, onClick }) => {
  const activelink = ''
  const normallink = ''
  
  let location = useLocation();
  return (
    <Link
      to={path}
      className={` font-productsans font-bold text-sm px-5 mr-2 mb-2 text-center rounded text-black py-4 bg-white

        after:h-[2px] after:transition after:ease-in-out after:duration-75 after:bg-limegreenaccent
        hover:scale-110 
        hover:after:h-[2px] hover:after:w-100% hover:after:bg-limegreenaccent
        `}
      onClick={onClick}
      
    >
      <p>{text}</p>
      {/* {location.pathname === path ? <hr className="mx-auto w-16"></hr> : <></>} */}
    </Link>
  );
};

export default CoolNavbarTab;

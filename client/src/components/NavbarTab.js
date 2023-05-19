import { Link, useLocation } from "react-router-dom";

const NavbarTab = ({ path, text, onClick }) => {
  let location = useLocation();
  return (
    <div className="relative group">
      <Link
        to={path}
        className={`font-productsans font-bold text-xl flex-initial mx-4 block text-center text-md rounded text-black w-[100px] py-2

          transition-all group-hover:scale-110 `}
        onClick={onClick}
      >
        {text}
        {/* {location.pathname === path ? <hr className="w-16 mx-auto"></hr> : <></>} */}
      </Link>
      <div className="group-hover:transition-all group-hover:w-[20%] h-[5px] bg-limegreenaccent w-0 left-[50%] mr-2 ml-10"></div>
    </div>
  );
};

export default NavbarTab;

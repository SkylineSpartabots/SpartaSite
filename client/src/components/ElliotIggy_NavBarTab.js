import { Link, useLocation } from "react-router-dom";

const NavbarTab = ({ path, text, onClick }) => {
  let location = useLocation();
  return (
    <Link
      to={path}
      className={` transition-all delay-150 bg-size-200 bg-pos-0 font-productsans font-bold text-sm px-5 mr-2 mb-2 flex-initial block text-center text-md rounded text-white/75 w-[100px] py-4 
      hover:bg-pos-100 duration-500 hover:text-white/80 hover:scale-110 hover:bg-gradient-to-r from-frcpink/40 via-frcyellow/40 to-frcpurple/40`}
      onClick={onClick}
    >
      {text}
      {/* {location.pathname === path ? <hr className="mx-auto w-16"></hr> : <></>} */}
    </Link>
  );
};

export default NavbarTab;
 
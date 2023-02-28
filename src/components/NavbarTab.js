import { Link, useLocation } from "react-router-dom";

const NavbarTab = ({ path, text }) => {
  let location = useLocation();
  return (
    <Link
      to={path}
      className={`transition ease-in-out block text-center text-md rounded text-white w-[100px] py-4  ${
        location.pathname === path ? "font-semibold" : ""
      } hover: hover:scale-110`}
    >
      {text}
      {location.pathname === path ? <hr className="mx-auto w-16"></hr> : <></>}
    </Link>
  );
};

export default NavbarTab;

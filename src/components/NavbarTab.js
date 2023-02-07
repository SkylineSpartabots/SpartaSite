import { Link, useLocation } from "react-router-dom";

const NavbarTab = ({ path, text }) => {
  let location = useLocation();
  return (
    <Link
      to={path}
      className={`transition ease-in-out block text-center rounded text-white px-4 py-4 w-[150px] ${
        location.pathname === path ? "bg-emerald-500" : ""
      } hover:bg-emerald-500 hover:scale-110`}
    >
      {text}
    </Link>
  );
};

export default NavbarTab;

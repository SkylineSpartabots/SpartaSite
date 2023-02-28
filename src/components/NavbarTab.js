import { Link, useLocation } from "react-router-dom";

const NavbarTab = ({ path, text }) => {
  let location = useLocation();
  return (
    <Link
      to={path}
      className={`transition ease-in-out block text-center rounded text-white px-2 py-4 w-[100px] ${
        location.pathname === path ? "bg-frcblue" : ""
      } hover:bg-frcblue hover:scale-110`}
    >
      {text}
    </Link>
  );
};

export default NavbarTab;

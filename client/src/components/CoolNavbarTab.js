import { Link, useLocation } from "react-router-dom";

const CoolNavbarTab = ({ path, text, onClick }) => {
  let location = useLocation();
  return (
    <Link
      to={path}
      className={` font-productsans font-bold text-sm px-5 mr-2 mb-2 flex-initial  block text-center text-md rounded text-black w-[100px] py-4 

        hover:scale-110`}
      onClick={onClick}
    >
      {text}
      {/* {location.pathname === path ? <hr className="mx-auto w-16"></hr> : <></>} */}
    </Link>
  );
};

export default CoolNavbarTab;

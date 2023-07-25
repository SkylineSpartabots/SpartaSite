import { Link } from "react-router-dom";

const SidebarTab = ({ text, path, onClick }) => {
  return (
    <Link
      className="font-productsans text-xl text-black hover:text-gray-500 duration-200"
      to={path}
      onClick={onClick}
    >
      {text}
      <hr className="w-full"></hr>
    </Link>
  );
};

export default SidebarTab;

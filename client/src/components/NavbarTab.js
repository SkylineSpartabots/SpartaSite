import { Link, useLocation } from "react-router-dom";

const NavbarTab = ({ path, text, onClick }) => {
let location = useLocation();
return (
<Link
to={path}
className={`transition-all delay-150 bg-size-200 bg-pos-0 hover:bg-pos-100 duration-300 bg-gradient-to-r from-frcpink via-frcyellow to-frcpurple font-productsans font-bold text-sm px-5 mr-2 mb-2 flex-initial block text-center text-md rounded text-white w-[100px] py-4 

hover:scale-110`}
onClick={onClick}
>
{text}
{/* {location.pathname === path ? <hr className="mx-auto w-16"></hr> : <></>} */}
</Link>
);
};

export default NavbarTab;
import { useLocation } from "react-router-dom";
const TopBar = () => {
  let location = useLocation();
  return (
    <div className="w-full absolute top-8 px-[75px]">
      <h1
        className={`font-scoutcond font-black text-4xl sm:text-5xl  ${
          location.pathname === "/about" ||
          location.pathname === "/home" ||
          location.pathname === "/join" ||
          location.pathname === "/"
            ? "text-white"
            : "text-black"
        }`}
      >
      </h1>
    </div>
  );
};

export default TopBar;

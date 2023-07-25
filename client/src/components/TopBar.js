import { useLocation } from "react-router-dom";
const TopBar = () => {
  let location = useLocation();
  return (
    <div className="w-full absolute top-8 px-[75px]">
      <h1
        className={`font-scoutcond font-black text-4xl sm:text-5xl  ${
          location.pathname === "/hours" ||
          location.pathname === "/sponsors" ||
          location.pathname === "/login"
            ? "text-black"
            : "text-white"
        }`}
      >
        SPARTABOTS 2976
      </h1>
    </div>
  );
};

export default TopBar;

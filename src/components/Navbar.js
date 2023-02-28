import NavbarTab from "./NavbarTab";

const Navbar = () => {
  return (
    <nav className="fixed flex flex-row items-center justify-between w-full bg-gradient-to-r from-frcpurple to-frcyellow z-10 pr-[75px]">
      <h1 className="font-scoutcond font-black italic text-5xl py-[1.5rem] pl-[75px] text-center text-white">
        SPARTABOTS 2976
      </h1>
      <div className="flex flex-row flex-wrap flex-initial items-center gap-2 justify-around p-4 rounded">
        <NavbarTab text="Home" path="/" />
        <NavbarTab text="About" path="/about" />
        <NavbarTab text="Font Demo" path="/fontDemo" />
      </div>
    </nav>
  );
};

export default Navbar;

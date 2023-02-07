import NavbarTab from "./NavbarTab";

const Navbar = () => {
  return (
    <nav className="sticky flex flex-row items-center justify-between top-0 w-full bg-gradient-to-r from-frcpurple to-frcyellow z-10 pr-[200px]">
      <h1 className="font-scoutcond font-black italic text-6xl py-[3rem] pl-[100px] text-center text-white">
        SPARTABOTS 2976
      </h1>
      <div className=" flex flex-row flex-wrap flex-initial items-center gap-8 justify-around bg-slate-400 p-4 rounded">
        <NavbarTab text="Home" path="/" />
        <NavbarTab text="Font Demo" path="/fontDemo" />
      </div>
    </nav>
  );
};

export default Navbar;

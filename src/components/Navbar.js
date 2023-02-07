import NavbarTab from "./NavbarTab";

const Navbar = () => {
  return (
    <nav className="sticky flex flex-row items-center justify-between top-0 w-full bg-gradient-to-r from-frcpurple to-frcyellow z-10">
      <h1 className="font-scoutcond font-black italic text-6xl py-[3rem] pl-[20rem] text-white">
        SPARTABOTS 2976
      </h1>
      <div className="pr-20 flex flex-row flex-wrap flex-initial justify-around w-[512px]">
        <NavbarTab />
        <NavbarTab />
      </div>
    </nav>
  );
};

export default Navbar;

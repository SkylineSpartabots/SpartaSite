import React from "react";

const FontDemo = () => {
  return (
    <div>
      <div className="block max-w-[100rem] mx-auto rounded-[2rem] my-10 items-center bg-gradient-to-r from-frcpurple to-frcyellow">
        <h1 className="font-scoutcond font-black italic text-6xl py-[3rem] pl-[5rem] text-white">
          SPARTABOTS 2976
        </h1>
      </div>
      <div className="block max-w-[100rem] mx-auto rounded-[2rem] mb-10 h-screen bg-black">
        <div className="mx-10 my-10">
          <div>
            <h1 className="inline font-scoutcond font-black italic text-[10rem] text-transparent bg-clip-text leading-none bg-gradient-to-r from-white via-frcyellow to-frcpurple">
              TITLES
            </h1>
            <p className="font-avenir font-bold text-[2rem] text-white">
              SCOUT CONDENSED BLACK ITALIC
            </p>
          </div>

          <div className="mt-5">
            <h1 className="inline font-scoutcond font-black text-[10rem] text-transparent bg-clip-text leading-none bg-gradient-to-r from-white via-frcyellow to-frcpurple">
              ALTERNATE TITLES
            </h1>
            <p className="font-avenir font-bold text-[2rem] text-white">
              SCOUT CONDENSED BLACK
            </p>
          </div>

          <div className="mt-5">
            <h1 className="inline font-avenir font-bold text-[8rem] text-transparent bg-clip-text leading-none bg-gradient-to-r from-white via-frcyellow to-frcpurple">
              SUBSTITUTE TITLES
            </h1>
            <p className="font-avenir font-bold text-[2rem] text-white">
              SCOUT CONDENSED BLACK ITALIC
            </p>
          </div>

          <div className="mt-5">
            <h1 className="inline font-productsans font-bold text-[4rem] text-transparent bg-clip-text leading-none bg-gradient-to-r from-white via-frcyellow to-frcpurple">
              Headers
            </h1>
            <p className="font-avenir font-bold text-[2rem] text-white">
              PRODUCT SANS BOLD
            </p>
            <p className="font-productsans font-bold text-[1.5rem] text-white">
              Usually around half the size of titles
            </p>
          </div>

          <div className="mt-5">
            <h1 className="inline font-productsans text-[3rem] text-transparent bg-clip-text leading-none bg-gradient-to-r from-white via-frcyellow to-frcpurple">
              Body Text
            </h1>
            <p className="font-avenir font-bold text-[2rem] text-white">
              PRODUCT SANS
            </p>
            <p className="font-productsans font-bold text-[1.5rem] text-white">
              Format as needed (bold, italic, etc.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontDemo;

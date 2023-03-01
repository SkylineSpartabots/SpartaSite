import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 px-16">
      <h1 className="text-8xl sm:text-9xl text-center font-scoutcond italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple px-4">
        {title}
      </h1>
      <hr className="w-full max-w-[700px] flex-initial border-[1px] border-white my-8" />
      <h1 className="text-4xl sm:text-5xl font-scoutcond font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
        {subtitle}
      </h1>
    </div>
  );
};

export default Heading;

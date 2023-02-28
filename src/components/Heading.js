import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-[100px] bg-gray-700">
      <h1 className="text-9xl font-scoutcond italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
        {title}
      </h1>
      <hr className="w-[700px] border-[1px] border-white my-8" />
      <h1 className="text-5xl font-scoutcond font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
        {subtitle}
      </h1>
    </div>
  );
};

export default Heading;

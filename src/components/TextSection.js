import React from "react";

const TextSection = ({ title, text }) => {
  return (
    <div className="flex flex-row px-6 py-4 w-[1000px] bg-white rounded gap-4">
      <div className="max-w-[400px]">
        <h1 className="text-5xl font-scoutcond font-black pb-4">{title}</h1>
        <p className="font-productsans text-base">{text}</p>
      </div>
      <div className="bg-slate-200 w-full h-[300px]"></div>
    </div>
  );
};

export default TextSection;

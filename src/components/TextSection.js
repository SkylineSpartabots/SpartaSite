import React from "react";

const TextSection = ({ title, text }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-1 px-6 py-4 max-w-[1000px] bg-white rounded gap-4 min-h-[300px]">
      <div className="flex-1 max-w-[500px] break-words">
        <h1 className="text-5xl font-scoutcond font-black pb-4">{title}</h1>
        <p className="font-productsans text-base">{text}</p>
      </div>
      <div className="flex-1 bg-slate-200 w-full sm:w-[500px] min-h-[200px]"></div>
    </div>
  );
};

export default TextSection;

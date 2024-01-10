const HeaderBlock = ({ text }) => {
  return (
    <div className="max-w-[1000px] w-full text-center bg-gray-700 rounded p-4">
      <h1 className="mx-auto w-fit px-2 font-scoutcond font-black uppercase text-6xl italic text-transparent bg-clip-text text-white">
        {text}
      </h1>
    </div>
  );
};

export default HeaderBlock;

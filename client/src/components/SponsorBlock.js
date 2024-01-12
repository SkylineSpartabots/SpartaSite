const SponsorBlock = ({ amount, image}) => {
  return (
    <div className="flex-1 py-4 sm:max-w-[300px] min-h-[200px] sm:min-h-[400px] text-center ">
      <h1 className="text-4xl font-scoutcond uppercase pb-4 text-emerald-800 font-semibold break-words">
        {amount}
      </h1>
      <img
        src={image}
        className="w-full max-w-[500px] h-full"
        alt="Sponsor" 
      />
    </div>
  );
};

export default SponsorBlock;


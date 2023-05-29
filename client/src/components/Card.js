const Card = ({ title, text, image }) => {
  return (
    <div className="flex flex-row sm:flex-row px-6 py-4 max-w-[1000px] min-h-[500px] bg-white rounded gap-4 drop-shadow-md snap-center">
      <div className="flex-1 max-w-[1000px]">
        <h1 className="text-5xl font-scoutcond font-black pb-4 text-emerald-800">
          {title}
        </h1>
        <p className="font-productsans text-base">{text}</p>
      </div>
      <div className="flex-1 w-full ">
        <img
          src={image}
          className="object-cover w-full h-full rounded"
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;

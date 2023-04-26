const Card = ({ title, text, image }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-1 px-6 py-4 max-w-[1000px] bg-white rounded gap-4 min-h-[300px]">
      <div className="flex-1 max-w-[500px] break-words">
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

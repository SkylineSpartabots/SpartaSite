import Button from "./Button";

const InfoBlock = ({ title, text, buttonPath }) => {
  return (
    <div className="flex-1 py-4 sm:max-w-[300px] min-h-[200px] sm:min-h-[400px] text-center ">
      <h1 className="text-4xl font-scoutcond uppercase pb-4 text-emerald-800 font-semibold break-words">
        {title}
      </h1>
      <p className="font-productsans font-light pb-8">{text}</p>
      <Button path={buttonPath} text="Read More" />
    </div>
  );
};

export default InfoBlock;

import Button from "./Button";
import { useNavigate } from "react-router-dom";

const InfoBlock = ({ title, text, buttonPath }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(buttonPath);
  }

  return (
    <div className="flex-1 py-4 sm:max-w-[1000px] min-h-[200px] sm:min-h-[320px] flex-justify">
      <h1 className="titleColor text-4xl font-scoutcond uppercase pb-4 font-semibold break-words text-center" >
        {title}
      </h1>
      <p className="textColor font-productsans font-light pb-8 flex-grow">{text}</p>
      {(buttonPath ? <div className="text-center">
        <Button text="Read More" onClick={handleClick} color="bg-blue-900" />
      </div> : "")}
    </div>
  );
};

export default InfoBlock;

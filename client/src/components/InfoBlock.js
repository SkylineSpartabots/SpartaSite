import Button from "./Button";
import {useNavigate} from "react-router-dom";

const InfoBlock = ({title, text, image, imageAlt, buttonPath, buttonText, className}) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(buttonPath);
    }

    return (
        <div className={"flex-1 py-4 sm:max-w-[1000px] min-h-[200px] sm:min-h-[320px] flex-justify " + className}>
            <h1 className="titleColor text-4xl font-scoutcond uppercase pb-4 font-semibold break-words text-center">
                {title}
            </h1>
            {image ? (<img src={image} alt={imageAlt} style={{"height": "160px"}} className="object-cover rounded"/>) : ""}
            {image ? (<br/>) : ""}
            <p className="textColor font-productsans text-center font-light pb-8 flex-grow">{text}</p>
            {(buttonPath ? <div className="text-center">
                <Button text={buttonText ? buttonText : "Read More"} onClick={handleClick} color="bg-blue-900"/>
            </div> : "")}
        </div>
    );
};

export default InfoBlock;

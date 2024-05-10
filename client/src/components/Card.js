import LazyImage from "./LazyImage";
import LinkConverter from "./LinkConverter";

const Card = ({ title, text, image, alt, allowLinks = false }) => {
  
  var textElement = Array.isArray(text)?
    text.map(str => <p className="font-productsans text-base text-justify">{str}</p>) :
    (<p className="font-productsans text-base text-justify">{text}</p>);
  
  
  textElement = LinkConverter(textElement);
  var card = (
    <div className="flex flex-col sm:flex-row flex-1 px-6 py-4 max-w-[1000px] bg-white rounded gap-4 min-h-[300px]">
      <div className="flex-1 max-w-[500px] break-words">
        <h1 className="text-5xl font-scoutcond font-black pb-4 text-emerald-800">
          {title}
        </h1>
        {textElement}
      </div>
      <div className="flex-1 w-full">
      <LazyImage alt={alt} img={image} className="object-cover w-[500px] h-full rounded" />
    </div>

    </div>
  );


  return card;
};

export default Card;

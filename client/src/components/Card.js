import LazyImage from "./LazyImage";
import LinkConverter from "./LinkConverter";

const Card = ({ title, text, image, alt, vidurl, subtitle = "" }) => {
  var textElement = Array.isArray(text) ?
    text.map(str => <p className="font-productsans text-base text-justify">{str}</p>) :
    (<p className="font-productsans text-base text-justify">{text}</p>);

  textElement = LinkConverter(textElement);
  const mediaElement = vidurl ? (
    <div className="video-container object-cover w-[500px] h-full rounded">
      <iframe
        src={vidurl}
        title={title}
        width={500}
        height={282}
        className="video-embed"
      />
    </div>
  ) : (
    <LazyImage alt={alt} img={image} className="object-cover w-[500px] h-full rounded" />
  );

  var card = (
    <div className="flex flex-col sm:flex-row flex-1 px-6 py-6 max-w-[1000px] rounded-2xl gap-4 min-h-[300px] bgColor">
      <div className="flex-1 max-w-[500px] break-words">
        {LinkConverter(<h1 className="text-5xl font-scoutcond font-black pb-4 titleColor">{title}</h1>)}
        {subtitle !== "" ? <h2 className="text-4xl font-scoutcond font-black pb-3 titleColor">{subtitle}</h2> : null}
        <div className="textColor">{textElement}</div>
      </div>
      <div className="flex-1 w-full">
        {mediaElement}
      </div>
    </div>
  );

  return card;
};

export default Card;

import LazyImage from "./LazyImage";
import LinkConverter from "./LinkConverter";

const Card = ({title, text, image, alt, vidurl, subtitle = ""}) => {
    var textElement = Array.isArray(text) ?
        text.map(str => <p className="font-productsans text-base text-justify">{str}</p>) :
        (<p className="font-productsans text-base text-justify">{text}</p>);

    textElement = LinkConverter(textElement);
    const mediaElement = vidurl ? (
        <div className="video-container object-cover w-full h-full flex-1 rounded">
            <iframe
                src={vidurl}
                title={title}
                className="video-embed rounded w-full h-full"
            />
        </div>
    ) : (
        <LazyImage alt={alt} img={image} className="object-cover rounded flex-1"/>
    );

    var card = (
        <div
            className="flex flex-col sm:flex-row flex-1 px-6 py-6 max-w-[1000px] w-full rounded-2xl gap-4 min-h-[300px] bgColor">
            <div className="flex-1 max-w-[500px] break-words">
                {LinkConverter(<h1 className="text-5xl font-scoutcond font-black pb-4 titleColor">{title}</h1>)}
                {subtitle !== "" ?
                    <h2 className="text-4xl font-scoutcond font-black pb-3 titleColor">{subtitle}</h2> : null}
                <div className="textColor">{textElement}</div>
            </div>
            <div className="flex-1 flex w-full">
                {mediaElement}
            </div>
        </div>
    );

    return card;
};

export default Card;

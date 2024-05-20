import LazyImage from "./LazyImage";
import LinkConverter from "./LinkConverter";
import {useEffect, useState} from "react";

const Card = ({ title, text, image, alt, subtitle = "" }) => {

  var textElement = Array.isArray(text) ?
    text.map(str => <p className="font-productsans text-base text-justify">{str}</p>) :
    (<p className="font-productsans text-base text-justify">{text}</p>);


  textElement = LinkConverter(textElement);
  var card = (
    <div className="flex flex-col sm:flex-row flex-1 px-6 py-6 max-w-[1000px] rounded-2xl gap-4 min-h-[300px] bgColor">
      <div className="flex-1 max-w-[500px] break-words">
        {LinkConverter((<h1 className="text-5xl font-scoutcond font-black pb-4 titleColor" >{title}</h1>))}
        {subtitle !== "" ? (<h2 className="text-4xl font-scoutcond font-black pb-3 titleColor" >
          {subtitle}
        </h2>) : undefined}
        <div className="textColor">{textElement}</div>
      </div>
      <div className="flex-1 w-full">
        <LazyImage alt={alt} img={image} className="object-cover w-[500px] h-full rounded" />
      </div>

    </div>
  );


  return card;
};

export default Card;

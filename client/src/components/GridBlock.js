import LazyImage from "./LazyImage";

const GridBlock = ({ content }) => {
    return <div className="w-full h-full bg-gray-600">{content}</div>;
  };
  
  const GridContent = ({ subheading, paragraph }) => {
    return (
      <GridBlock
        content={
          <div className="flex flex-col gap-2 md:gap-3 md:pl-8 md:pt-6 md:pr-6 md:pb-8 p-4">
            <h2 className="text-3xl md:text-5xl font-scoutcond font-semibold text-white">
              {subheading}
            </h2>
            <p className="font-productsans text-white text-justify text-sm md:text-base xl:text-xl">
              {paragraph}
            </p>
          </div>
        }
      />
    );
  };
  
  const GridImage = ({ image, alt }) => {
    return (
      <GridBlock
        content={
          <LazyImage
            img={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        }
      />
    );
  };

  export { GridBlock, GridImage, GridContent };
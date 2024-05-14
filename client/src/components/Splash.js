import LazyImage from "../components/LazyImage";
const Splash = ({ title, subtitle, image, tfont, tcolor, sfont, scolor }) => {
  // Set Defaults
  const titleFont = tfont ? tfont : "productsans";
  const subtitleFont = sfont ? sfont : "avenir";
  const titleColor = tcolor ? tcolor : "white";
  const subtitleColor = scolor ? scolor : "white";
  return (
    <div className="min-h-screen relative">
      <LazyImage
        img={image}
        alt="Splash"
        className="object-cover h-full w-full absolute mix-blend-overlay z-0"
      />
      <div className="absolute bottom-0 left-0 p-8 sm:p-16 max-w-[100%]">
        <h1 className={`text-6xl text-left font-${titleFont} bold font-extrabold text-transparent bg-clip-text text-${titleColor} px-2 sm:px-5`}>
          {title}
        </h1>
        <h1 className={`text-6xl sm:text-8xl text-left font-${subtitleFont} bold font-extrabold text-transparent bg-clip-text text-${subtitleColor} px-2 sm:px-5`}>
          {subtitle}
        </h1>
      </div>
    </div>
  );
};

export default Splash;



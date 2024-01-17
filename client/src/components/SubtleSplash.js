import LazyImage from "./LazyImage";
const SubtleSplash = ({ title, subtitle, image }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-16">
      <LazyImage
        img={image}
        alt="Splash"
        className="object-cover h-full w-full absolute mix-blend-overlay"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-20%" />
      <div className="absolute left-5 bottom-9 m-4">
        <h2 className="text-3xl md:text-5xl text-left font-productsans font-medium text-spartagreen px-4 z-10">
          {subtitle}
        </h2>
        <h1 className="text-6xl md:text-8xl text-center font-scoutcond font-extrabold text-transparent bg-clip-text text-white px-4 z-10">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SubtleSplash;

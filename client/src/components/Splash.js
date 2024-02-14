import LazyImage from "./LazyImage";
const Splash = ({ title, subtitle, image }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-16">
      {/* <img
        src={image}
        className="object-cover h-full w-full absolute mix-blend-overlay"
        alt=""
      /> */}
      <h1 className="text-7xl sm:text-9xl text-center font-scoutcond italic font-extrabold text-transparent bg-clip-text text-white px-4">
        {title}
      </h1>
      <hr className="w-full max-w-[700px] flex-initial border-[1px] border-white my-8 z-10" />
      <h1 className="text-7xl sm:text-9xl text-center font-scoutcond italic font-extrabold text-transparent bg-clip-text text-white px-4">
        {subtitle}
      </h1>
      <LazyImage
        img={image}
        alt="Splash"
        className="object-cover h-full w-full absolute mix-blend-overlay z-0"
      />
    </div>
  );
};

export default Splash;

import LazyImage from "./LazyImage";
const SplashOld = ({ title, subtitle, image }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-16">
      {/* <img
        src={image}
        className="object-cover h-full w-full absolute mix-blend-overlay"
        alt=""
      /> */}
      <h1 className="text-8xl sm:text-9xl text-center font-scoutcond italic font-extrabold text-transparent bg-clip-text text-white px-5">
        {title}
      </h1>
      <hr className="w-full max-w-[700px] flex-initial my-8 z-10 border-[5px]" style={{borderImage: 'linear-gradient(to right, #FCE6AC, #F04F4F, #670281, #2357E8)', borderImageSlice: 1}} />
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

export default SplashOld;
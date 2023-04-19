const Heading = ({ title, subtitle, image }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600 px-16">
      <img
        src={image}
        className="object-cover h-full w-full absolute mix-blend-overlay"
        alt=""
      />
      <h1 className="text-7xl sm:text-9xl text-center font-scoutcond italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple px-4 z-10">
        {title}
      </h1>
      <hr className="w-full max-w-[700px] flex-initial border-[1px] border-white my-8 z-10" />
      <h1 className="z-10 text-4xl sm:text-5xl font-scoutcond font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple text-center">
        {subtitle}
      </h1>
    </div>
  );
};

export default Heading;

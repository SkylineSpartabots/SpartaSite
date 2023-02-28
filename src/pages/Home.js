const Home = () => {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col items-center justify-center px-[100px] bg-gray-400">
        <h1 className="text-8xl font-scoutcond italic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
          We're the Spartabots
        </h1>
        <hr className="w-[700px] border-[1px] border-white my-8" />
        <h1 className="text-5xl font-scoutcond font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-frcyellow to-frcpurple">
          FRC Team 2976
        </h1>
      </div>
      <div className="bg-slate-100 flex items-center py-8 justify-center">
        <div className="flex flex-row px-6 py-4 w-[1000px] bg-white rounded gap-4">
          <div className="max-w-[400px]">
            <h1 className="text-5xl font-scoutcond font-black pb-4">
              ABOUT US
            </h1>
            <p className="font-productsans text-base">
              Created in 2008, our team participates in the FIRST Robotics
              Competition as team 2976. We are a high school club operating at
              Skyline High School, Sammamish, WA.
            </p>
          </div>
          <div className="bg-slate-200 w-full h-[300px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { LazyVideo } from "../components/LazyVideo.js";

 export const VideoSplash = ({ title, subtitle, video }) => {
     return (
         <div className="min-h-screen relative">
             {/* Video */}
             <LazyVideo
                 src={video}
                 type="video/mp4"
                 className="object-cover h-full w-full absolute z-0"
                 autoPlay
                 loop
                 muted
                 playsInline />
             {/* Text */}
             <div className="absolute bottom-0 left-0 py-24 sm:px-16 sm:py-16 max-w-full">
                 <h1 className={`text-6xl sm:text-6xl text-left font-productsans bold font-extrabold text-transparent bg-clip-text text-white px-5`}>
                     {title}
                 </h1>
                 <h1 className={`text-left text-5xl sm:text-7xl md:text-8xl font-avenir bold font-extrabold text-transparent bg-clip-text text-white px-5 max-w-full`}>
                     {subtitle}
                 </h1>
             </div>
         </div>
     );
 };

import { useEffect } from "react";
import Splash from "../components/Splash";

const year = new Date().getFullYear();

const Sponsors = () => {
  // this function scrolls to the top of the page when first navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <Splash
        title="SPONSORS"
        subtitle={year}
        image={"https://res.cloudinary.com/spartasite/image/upload/v1715152599/FIRST%20Logo%20Team.webp"}
      />
      <div className="flex flex-col items-center">
        <div className="box flex flex-col items-center">
          <div className="flex-initial flex flex-row flex-wrap gap-8 px-12 justify-center">
            <img
              src={"https://res.cloudinary.com/spartasite/image/upload/v1715152598/2024%20Sponsor%20Banner.webp"}
              className="flex-initial max-h-[3000px] sm:max-h-[3000px]"
              alt="Final Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

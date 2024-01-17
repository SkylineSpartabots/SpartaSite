import Splash from "../components/Splash";
import { useEffect } from "react";
import botImage from "../graphics/images/Bot2-min.webp";
import { useNavigate } from "react-router-dom";

const LearnOnshape = () => {
  // this function scrolls to the top of the page when first navigated to
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/sponsors");
  }
  // someone more experienced with onshape pls replace this with more accurate
  return (
    <div className="">
      <Splash title="ONSHAPE" subtitle="www.onshape.com" image={botImage} />
      <div className="bg-slate-100 flex flex-col gap-8 p-8 items-center ">
        <div className="box">
          <h1 className="title">Overview</h1>
          <p className="font-productsans text-base text-justify">
            OnShape is the online CAD software we use for robot designing. To get started, first <a href="https://www.onshape.com/en/education/sign-up">create an account.</a> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnOnshape;

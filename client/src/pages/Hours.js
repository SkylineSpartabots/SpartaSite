import HeaderBlock from "../components/HeaderBlock";
import Stopwatch from "../components/Stopwatch";
import HoursLog from "../components/HoursLog";

const Hours = () => {
  return (
    <div className="pt-[135px] flex flex-col pb-8 items-center gap-8 bg-slate-100">
      <HeaderBlock text="Hours" />
      <Stopwatch />
      <HoursLog />
    </div>
  );
};

export default Hours;

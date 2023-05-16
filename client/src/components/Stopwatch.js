import { useState, useEffect } from "react";
import Button from "./Button";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  return (
    <div className="box items-center flex flex-col gap-4">
      <h1 className="text-6xl font-productsans">
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>
      <div className="flex flex-row gap-4 w-fit">
        <Button
          text={isActive ? "Pause" : "Start"}
          color={isActive ? "bg-orange-400" : "bg-green-500"}
          onClick={() => setIsActive((prev) => !prev)}
        />
        <Button
          text="Reset"
          color={"bg-red-500"}
          onClick={() => {
            setIsActive(false);
            setTime(0);
          }}
        />
      </div>
    </div>
  );
};

export default Stopwatch;

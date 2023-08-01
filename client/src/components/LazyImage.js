import { useEffect, useRef, useState } from "react";

const LazyImage = ({ img, style }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return visible ? (
    <img src={img} alt="" className={style} />
  ) : (
    <img
      ref={ref}
      style={{ backgroundColor: "gray" }}
      className="object-cover w-full h-full"
    />
  );
};

export default LazyImage;

import { useEffect, useRef, useState } from "react";

const LazyImage = ({ img, alt, style }) => {
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
    <img src={img} alt={alt} className={style} /> 
  ) : (
    // An empty alt tag is required for accessibility
    <img ref={ref} alt="" style={{ backgroundColor: "gray" }} className={style} />
  );
};

export default LazyImage;

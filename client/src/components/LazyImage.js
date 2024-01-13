import { useEffect, useRef, useState } from "react";

const LazyImage = ({ img, alt, className }) => {
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
    <img src={img} alt={alt} className={className} /> 
  ) : (
    // An empty alt tag is required for accessibility
    <img ref={ref} alt="" style={{ backgroundColor: "gray" }} className={className} />
  );
};

export default LazyImage;

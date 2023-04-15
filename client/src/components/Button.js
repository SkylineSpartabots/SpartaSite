import { Link } from "react-router-dom";

const Button = ({ text, path }) => {
  return (
    <Link
      to={path}
      className=" min-w-[100px] p-4 bg-frcblue rounded text-white font-productsans "
    >
      {text}
    </Link>
  );
};

export default Button;

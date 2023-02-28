import { Link } from "react-router-dom";

const Button = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="max-w-[100px] p-2 bg-frcblue rounded font-productsans"
    >
      {text}
    </Link>
  );
};

export default Button;

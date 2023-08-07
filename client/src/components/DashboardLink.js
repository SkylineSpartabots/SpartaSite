import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = ({ text, path }) => {
  return (
    <Link
      className="flex-1 w-full bg-white rounded py-4 px-6 font-productsans text-3xl font-bold text-center"
      to={path}
    >
      {text}
    </Link>
  );
};

export default DashboardLink;

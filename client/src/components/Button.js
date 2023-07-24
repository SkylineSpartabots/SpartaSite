const Button = ({ text, onClick, color, disabled }) => {
  return (
    <button
      className={`transition ease-in-out min-w-[100px] p-4 ${color} rounded text-white font-productsans`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

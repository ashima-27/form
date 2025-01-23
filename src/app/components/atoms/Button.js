const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-green-900 text-white rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

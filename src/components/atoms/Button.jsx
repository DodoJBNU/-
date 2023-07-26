const Button = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

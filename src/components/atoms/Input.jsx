const Input = ({ type, value, onChange, placeholder, className, id, name }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;

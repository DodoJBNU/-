const Input = ({ type, value, onChange, placeholder, className, id, name, onBlur, errorData }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      onBlur={onBlur}
    />
  );
};

export default Input;

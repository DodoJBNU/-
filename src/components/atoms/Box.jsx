import * as box from "../../styles/atoms/Box";

const Box = ({ children, className = "" }) => {
  return <box.Box className={`box ${className}`}>{children}</box.Box>;
};

export default Box;

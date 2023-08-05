import { Link } from "react-router-dom";

const Card = ({ to, children, className }) => {
  return (
    <Link className={`${className}`} to={to} style={{ textDecoration: "none", color: "black" }}>
      {children}
    </Link>
  );
};

export default Card;

import { Link } from "react-router-dom";

const Links = ({ src, className, children, fontSize }) => {
  return (
    <Link to={src} className={className}>
      {children}
    </Link>
  );
};

export default Links;

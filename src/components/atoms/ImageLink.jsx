import { Link } from "react-router-dom";
const ImageLink = ({ src, className, to }) => {
  return (
    <Link to={to}>
      <img src={src} className={className} />
    </Link>
  );
};

export default ImageLink;

const Photo = ({ src, alt, className }) => {
  return (
    <picture className={className}>
      <source srcSet={src} />
      <img src={src} alt={alt} />
    </picture>
  );
};
export default Photo;

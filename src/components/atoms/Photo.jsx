import * as S from "../../styles/atoms/Photo";

const Photo = ({ src, alt, className }) => {
  return (
    <S.picture>
      <source srcSet={src} />
      <img src={src} alt={alt} className={className} />
    </S.picture>
  );
};
export default Photo;

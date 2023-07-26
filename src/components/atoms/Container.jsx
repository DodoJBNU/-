import * as S from "../../styles/atoms/Container";

const Container = ({ children, className = "" }) => {
  return <S.Container className={`Container ${className}`}>{children}</S.Container>;
};

export default Container;

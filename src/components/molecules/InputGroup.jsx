import Input from "../atoms/Input";
import Box from "../atoms/Box";
import * as S from "../../styles/molecules/InputGroup";

const ERROR_MSG = {
  required: "필수 정보입니다.",
  inValidEmail: "이메일 형식으로 작성해주세요.",
  inValidPassword: "8~20자 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.",
  inValidPasswordConfirm: "비밀번호가 일치하지 않습니다.",
};

const InputGroup = ({
  id,
  type,
  value,
  onChange,
  className,
  placeholder,
  label,
  name,
  onBlur,
  errorData = { username: "", email: "", password: "", passwordConfirm: "" },
  headerText,
}) => {
  return (
    <S.Div>
      <S.Span>{headerText}</S.Span>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        className={className}
      />
      {errorData[name] ? (
        <S.Span style={{ color: "red" }}>{ERROR_MSG[errorData[name]]}</S.Span>
      ) : null}
    </S.Div>
  );
};

export default InputGroup;

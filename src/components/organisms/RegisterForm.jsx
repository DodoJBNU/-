import Button from "../atoms/Button";
import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { register } from "../../services/api";
import useRegexCheck from "../../hooks/useRegexCheck";
import * as S from "../../styles/organisms/RegisterForm";

const RegisterForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const [serverErrorMsg, setServerErrorMsg] = useState("");
  const [errorData, setErrorData] = useState(initialState);
  const { value, handleOnChange } = useInput(initialState);
  const { handleOnRegex } = useRegexCheck(initialState, errorData, setErrorData);

  const isAllTrueError = () => {
    return Object.values(errorData).every((value) => value === true);
  };

  const handleRegister = async () => {
    try {
      const response = await register({
        email: value.email,
        password: value.password,
        username: value.username,
      });
      console.log("회원가입 성공", response.data);
    } catch (error) {
      setServerErrorMsg(() => error.response.data.error.message);
    }
  };
  return (
    <S.Container>
      <S.InputGroup
        id="email"
        name="email"
        type="email"
        placeholder="이메일"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
        onBlur={() => handleOnRegex("email", value)}
        errorData={errorData}
        headerText={"이메일 (아이디)"}
      />
      <S.InputGroup
        id="username"
        name="username"
        className="username"
        type="text"
        placeholder="이름"
        label="이름"
        value={value.username}
        onChange={handleOnChange}
        onBlur={() => handleOnRegex("username", value)}
        errorData={errorData}
        headerText={"이름"}
      />
      <S.InputGroup
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
        onBlur={() => handleOnRegex("password", value)}
        errorData={errorData}
        headerText={"비밀번호"}
      />
      <S.InputGroup
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
        onBlur={() => handleOnRegex("passwordConfirm", value)}
        errorData={errorData}
        headerText={"비밀번호 확인"}
      />
      {serverErrorMsg ? <div style={{ color: "red" }}>{serverErrorMsg}</div> : null}
      <S.Button
        onClick={() => {
          // api 회원가입 요청
          handleRegister();
        }}
        disabled={!isAllTrueError()}
      >
        회원가입
      </S.Button>
    </S.Container>
  );
};

export default RegisterForm;

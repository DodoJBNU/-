import { useEffect } from "react";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import * as S from "../../../src/styles/organisms/LoginForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(value.username);
  }, [value.username]);

  return (
    <S.Container>
      <span>{email}</span>
      <S.Input
        id="email"
        name="email"
        type="email"
        placeholder="이메일"
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <S.Input
        id="password"
        name="password"
        type="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <S.Button
        onClick={() => {
          // api 로그인 요청
          dispatch(
            loginRequest({
              email: value.email,
              password: value.password,
            })
          );
        }}
      >
        로그인
      </S.Button>
    </S.Container>
  );
};

export default LoginForm;

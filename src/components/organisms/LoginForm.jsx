import { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../store/slices/userSlice";
import * as S from "../../../src/styles/organisms/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";

const LoginForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);
  const [LoginStatus, SetloginStatus] = useState(null);
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["id"]);
  const oneMinute = new Date();
  oneMinute.setMinutes(oneMinute.getMinutes() + 1);
  useEffect(() => {
    if (LoginStatus === "fulfilled") {
      console.log(cookies["id"]);
      navigate("/");
    } else {
      console.log("if문 안 rejected");
    }
  }, [LoginStatus, cookies["id"]]);

  const handleLogin = async () => {
    try {
      const response = await dispatch(
        loginRequest({
          email: value.email,
          password: value.password,
        })
      );
      console.log("로그인 시도", response.meta.requestStatus); // fulfilled 일때는 로그인 성공.
      console.log("로그인 시도", response); // fulfilled 일때는 로그인 성공.
      // token : response.payload.token
      SetloginStatus(() => response.meta.requestStatus);
      setCookie("id", response.payload.token, {
        expires: oneMinute,
      });
    } catch (error) {
      console.log("로그인 실패", error);
    }
  };
  return (
    <S.Container>
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
          handleLogin();
        }}
      >
        로그인
      </S.Button>
      <S.Link src="/signup">회원가입</S.Link>
    </S.Container>
  );
};

export default LoginForm;

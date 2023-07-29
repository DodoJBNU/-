import * as S from "../../styles/molecules/GNB";
import cartImg from "../../image/cart.png";
import shoppingImg from "../../image/logoKakao.png";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const GNB = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["id"]);
  // const email = useSelector((state) => state.user.email);

  const navigate = useNavigate();

  const logout = () => {
    removeCookie("id");
    alert("정상적으로 로그아웃 되었습니다.");
    navigate("/");
  };

  useEffect(() => {
    const token = cookies.id;
  });
  return (
    <S.Div className="HeaderMain">
      <S.ImageLink to="/" src={shoppingImg} className="shoppingImg" />
      <S.Util>
        <S.ImageLink src={cartImg} className="cartImg" />
      </S.Util>
      {!cookies.id || cookies.id.length === 0 ? (
        <S.Link src="/login" className="LoginLink" children="로그인"></S.Link>
      ) : null}
      {cookies.id && cookies.id.length > 0 ? (
        <S.Link src="/" className="LogoutLink">
          <div onClick={logout}>로그아웃</div>
        </S.Link>
      ) : null}
    </S.Div>
  );
};

export default GNB;

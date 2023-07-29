import { styled } from "styled-components";
import imageLink from "../../components/atoms/ImageLink";
import Links from "../../components/atoms/Links";

export const Div = styled.div`
  &.HeaderMain {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 5rem;
  }
`;

export const ImageLink = styled(imageLink)`
  &.shoppingImg {
    width: 6rem;
    height: 1.8rem;
    margin-left: 7rem;
  }
  &.cartImg {
    width: 2.5rem;
    margin-left: auto;
    margin-right: 1.5rem;
  }
`;

export const Link = styled(Links)`
  text-decoration: none;
  color: black;
  &.LoginLink {
    border-left: 1px solid;
    border-color: #d8d8d8;
    padding-left: 1.5rem;
    margin-right: 8rem;
    font-size: 0.9rem;
  }
  &.LogoutLink {
    border-left: 1px solid;
    border-color: #d8d8d8;
    padding-left: 1.5rem;
    margin-right: 8rem;
    font-size: 0.9rem;
  }
`;

export const Util = styled.span`
  margin-left: auto;
`;

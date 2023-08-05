import { styled } from "styled-components";
import photo from "../../components/atoms/Photo";
import card from "../../components/atoms/Card";

export const freeDelivery = styled.span`
  display: inline-block;
  color: rgba(24, 32, 55, 0.7);
  font-size: 0.7rem;
  border-radius: 5px;
  background-color: #f2f6f8;
  margin: 1rem 0;
  letter-spacing: 0.05rem;
  padding: 0.2rem 0.4rem;
`;

export const Div = styled.div`
  font-size: 1.5rem;
`;
export const Span = styled.span`
  &.product-price {
    font-weight: 700;
  }
  &.talk-cost {
    color: #4684e9;
    font-weight: 700;
  }
`;

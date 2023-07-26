import { styled } from "styled-components";
import container from "../../components/atoms/Container";
import input from "../../components/atoms/Input";
import button from "../../components/atoms/Button";

export const Container = styled(container)`
  margin-top: 15vh;
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(input)`
  height: 2rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border-style: solid;
  border-color: gray;
  border-width: 1px;
  text-indent: 0.5rem;
  vertical-align: middle;
  width: 50rem;
`;

export const Button = styled.button`
  margin-top: 2.5rem;
  width: 50rem;
  background-color: #ffe500;
  border: none;
  height: 3rem;
  border-radius: 4px;
`;

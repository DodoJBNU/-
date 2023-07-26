import { useEffect, useState } from "react";

const Email_REGEX = new RegExp("^[a-zA-Z0-9]+@[a-zA-Z0-9]+.+[a-zA-Z0-9]+$");
const PW_REGEX = new RegExp(
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>?])(?=.*[^\s]).{8,20}$/
);

const useRegexCheck = (initialState, error, setError) => {
  let result;

  const handleOnRegex = (inputId, inputValue) => {
    if (inputValue[inputId].length === 0) {
      result = "required";
    } else {
      switch (inputId) {
        case "username":
          result = true;
          break;
        case "email":
          result = Email_REGEX.test(inputValue[inputId]) ? true : "inValidEmail";
          break;
        case "password":
          result = PW_REGEX.test(inputValue[inputId]) ? true : "inValidPassword";
          break;
        case "passwordConfirm":
          result = inputValue.password === inputValue[inputId] ? true : "inValidPasswordConfirm";
          break;
        default:
          return;
      }
    }
    setError((prev) => ({ ...prev, [inputId]: result }));
  };

  useEffect(() => {
    console.log(error);
  }, [error]);
  return { handleOnRegex };
};

export default useRegexCheck;

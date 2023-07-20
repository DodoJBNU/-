// hooks의 이름은 use... 라는 이름을 가진다.

import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };

  return { value, handleOnChange };
};

export default useInput;

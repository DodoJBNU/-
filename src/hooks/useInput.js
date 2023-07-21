// hooks의 이름은 use... 라는 이름을 가진다.

import { useState } from 'react';

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = e => {
    const { name, value } = e.target;
    setValue(prev => ({ ...prev, [name]: value }));

    // setValue((prev)=>{
    //   // 여기서 setValue의 전처리를 할 수 있음.
    //   return{
    //     ...prev,
    //     [name]:value
    //   }
    // })
  };

  return { value, handleOnChange };
};

export default useInput;

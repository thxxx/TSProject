import { useState, useCallback } from "react";

export default (initialValue = "") => {
  // 회원가입, 로그인 혹은 기타 입력을 받을 때
  // 일반적으로 state와 onChange메소드를 공통적으로 사용한다.
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    e.preventDefault();
    setValue(e.target.value);
  }, []);

  return [value, handler];
};

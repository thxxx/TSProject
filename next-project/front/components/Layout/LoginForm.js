import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "@chakra-ui/react";
import { loginRequestAction } from "../../reducers/user"; // index기 때문에 굳이 안붙여줘도 된다.

const LoginForm = () => {
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log("입력한 이메일", e);
      // setIsLoggedIn(true);
      dispatch(loginRequestAction({ email }));
    },
    [email]
  );

  return (
    <form onSubmit={onSubmitForm}>
      <Input
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={useCallback((e) => {
          setEmail(e.currentTarget.value);
        }, [])}
      />
      <Button mt={4} colorScheme="teal" type="submit" isLoading={isLoggingIn}>
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;

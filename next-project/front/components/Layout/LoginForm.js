import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  FormControl,
  Form,
  Formik,
  FormLabel,
  Button,
  Input,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { loginAction } from "../../reducers/user"; // index기 때문에 굳이 안붙여줘도 된다.

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const onSubmitForm = useCallback(() => {
    console.log(email);
    // setIsLoggedIn(true);
    dispatch(loginAction({ email }));
  }, [email]);

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
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;

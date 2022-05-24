import React, { useState, useCallback } from "react";
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

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");

  const isError = email === "";

  return (
    <form
      onSubmit={() => {
        setIsLoggedIn(true);
      }}>
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

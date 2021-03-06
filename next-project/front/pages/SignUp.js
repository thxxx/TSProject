import React, { useState, useCallback, useMemo } from "react";
import useInput from "../components/hooks/useInput";
import useToggle from "../components/hooks/useToggle";
import Layout from "../components/Layout";
import { Input, Button, Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UPP_REQUEST } from "../reducers/user";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isSignUpLoading } = useSelector((state) => state.user);

  const [email, onChangeEmail] = useInput("");
  const [nickName, onChangeNickName] = useInput("");
  const [password, setPassword] = useState("");
  const [term, toggleTerm] = useToggle(false);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      if (!term) {
        console.log("동의해주세여");
      } else {
        console.log(email, password, nickName);
        dispatch({
          type: SIGN_UPP_REQUEST,
          data: { email, password, nickName },
        });
      }
    },
    [email, password, nickName]
  );

  const titleStyle = useMemo(
    () => ({
      fontSize: "1.3em",
      marin: 10,
    }),
    []
  );

  return (
    <Layout>
      <div style={titleStyle}>회원가입</div>
      <form onSubmit={submit}>
        <Input
          value={email}
          onChange={onChangeEmail}
          placeholder="사용하실 아이디를 입력해주세요."
        />
        <Input
          value={nickName}
          onChange={onChangeNickName}
          placeholder="사용하실 닉네임을 입력해주세요."
        />
        <Input
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="사용하실 비밀번호를 입력해주세요."
        />
        <Checkbox value={term} onChange={toggleTerm}>
          개인정보 약관에 동의합니다.
        </Checkbox>
        <Button type="submit" loading={isSignUpLoading}>
          회원가입
        </Button>
      </form>
    </Layout>
  );
};

export default SignUp;

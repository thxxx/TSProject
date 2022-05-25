import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";
import Card from "../Card";
import { logoutAction } from "../../reducers/user"; // index기 때문에 굳이 안붙여줘도 된다.

const UserProfile = () => {
  const dispatch = useDispatch();

  const doLogout = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <div>
      <Button onClick={doLogout}>로그아아ㅜㅅ</Button>
      유저 프로필
      <Card image="/me.png" title="김호진" />
    </div>
  );
};

export default UserProfile;

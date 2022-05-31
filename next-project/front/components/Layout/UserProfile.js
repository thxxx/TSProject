import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import Card from "../Card";
import { logoutRequestAction } from "../../reducers/user"; // index기 때문에 굳이 안붙여줘도 된다.

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, isLoggingIn } = useSelector((state) => state.user);

  const doLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <div>
      <Button onClick={doLogout} isLoading={isLoggingIn}>
        로그아아ㅜㅅ
      </Button>
      유저 프로필
      <Card image="/me.png" title={user.nickname} />
    </div>
  );
};

export default UserProfile;

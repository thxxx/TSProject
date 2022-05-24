import React from "react";
import { Button } from "@chakra-ui/react";
import Card from "../Card";

const UserProfile = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Button onClick={(e) => setIsLoggedIn(false)}>로그아아ㅜㅅ</Button>
      유저 프로필
      <Card image="/me.png" title="김호진" />
    </div>
  );
};

export default UserProfile;

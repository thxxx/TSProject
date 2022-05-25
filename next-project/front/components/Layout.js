import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Input, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import LoginForm from "./Layout/LoginForm";
import UserProfile from "./Layout/UserProfile";

const TopLayout = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "10px",
});

const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <TopLayout>
        <>공통메뉴</>
        <Input style={{ width: "50%", verticalAlign: "middle" }} />
        <Link href="/Profile">
          <a>프로필</a>
        </Link>
        <Link href="/SignUp">
          <a>회원가입</a>
        </Link>
      </TopLayout>
      {isLoggedIn ? <UserProfile /> : <LoginForm />}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

// 받아오는 props의 타입을 검사한다. TS 쓰면 이런거 안쓰지

export default Layout;

import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import FollowList from "../components/Profile/FollowList";
import NicknameEditForm from "../components/Profile/NicknameEditForm";

const followingList = [
  { name: "김호진" },
  { name: "박재은" },
  { name: "잰이" },
];
const followerList = [{ name: "김호진" }, { name: "박재은" }, { name: "잰이" }];

const Profile = () => {
  return (
    <Layout>
      <Head>
        <title>프로필</title>
      </Head>
      <div>내 프로필</div>
      <NicknameEditForm />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </Layout>
  );
};

export default Profile;

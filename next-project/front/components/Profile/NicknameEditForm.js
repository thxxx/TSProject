import React, { useCallback } from "react";
import { Input, Button } from "@chakra-ui/react";

const NicknameEditForm = () => {
  const submitSearch = useCallback((e) => {
    e.preventDefault();
    console.log("하이");
  }, []);

  return (
    <div>
      <form onSubmit={submitSearch}>
        <Input />
        <Button type="submit">닉네임 찾기</Button>
      </form>
    </div>
  );
};

export default NicknameEditForm;

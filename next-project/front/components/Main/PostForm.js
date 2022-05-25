import React from "react";
import useInput from "../hooks/useInput";
import { Textarea, Button } from "@chakra-ui/react";

const PostForm = () => {
  const [text, onChangeText] = useInput();

  return (
    <div>
      <Textarea
        value={text}
        onChange={onChangeText}
        placeholder="재밌는 일이 있으셨나요?"
      />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          짹짹
        </Button>
      </div>
    </div>
  );
};

export default PostForm;

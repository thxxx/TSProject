import React, { useCallback, useRef } from "react";
import useInput from "../hooks/useInput";
import { Textarea, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addPost } from "../../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, onChangeText] = useInput();

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(addPost);
  }, []);

  const onImageInput = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onImageChange = () => {};

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Textarea
        value={text}
        onChange={onChangeText}
        placeholder="재밌는 일이 있으셨나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onImageInput} onChange={onImageChange}>
          이미지 업로드
        </Button>
        <Button type="primary" style={{ float: "right" }} onClick={onSubmit}>
          짹짹
        </Button>
      </div>
      <div></div>
    </form>
  );
};

export default PostForm;

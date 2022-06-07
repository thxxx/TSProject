import React, { useCallback } from "react";
import { Textarea, Button } from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../../reducers/post";

const CommentForm = ({ post }) => {
  const [commentText, handleCommentText] = useInput();
  const dispatch = useDispatch();

  const submitComment = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { content: commentText, postId: post.id },
      });
    },
    [commentText]
  );

  return (
    <div>
      <form onSubmit={submitComment}>
        <Textarea value={commentText} onChange={handleCommentText} />
        <Button
          onClick={submitComment}
          style={{
            width: "100%",
            backgroundColor: "#C2DED1",
            marginTop: "4px",
          }}>
          댓글 작성
        </Button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;

import React, { useCallback } from "react";
import { Textarea, Button } from "@chakra-ui/react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

const CommentForm = ({ post }) => {
  const [commentText, handleCommentText] = useInput();

  const submitComment = useCallback((e) => {
    e.preventDefault();
    console.log(commentText);
  }, []);

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

import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const CommentsOne = styled.div({
  borderBottom: "1px solid gray",
  borderTop: "1px solid gray",
  margin: "1px 0px",
});

const Comments = ({ comments, id }) => {
  return (
    <div>
      {comments.length}개의 댓글
      {comments.map((item, index) => {
        return (
          <CommentsOne>
            <div>{item.User.nickname}님의 댓글</div>
            <div>{item.content}</div>
          </CommentsOne>
        );
      })}
    </div>
  );
};

Comments.PropTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
};

export default Comments;

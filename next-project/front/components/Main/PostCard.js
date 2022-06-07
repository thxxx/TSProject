import React from "react";
import styled from "@emotion/styled";
import PostImages from "./PostImages";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import Content from "./Content";
import { Image, Input, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import useToggle from "../hooks/useToggle";
import PropTypes from "prop-types";

const PostImage = styled.img({
  width: "200px",
});

const ButtonContainer = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0px",
});

const Card = styled.div({
  boxShadow: "2px 2px 10px rgba(0,0,0,0.4)",
  width: "500px",
  margin: "10px 0px",
  padding: "15px",
});

const PostCard = ({ post }) => {
  console.log("리렌더링 22");
  const id = useSelector((state) => state.user.me?.id);
  const [commentOpen, handleCommentOpen] = useToggle(false);

  return (
    <Card>
      {post.Images[0] && <PostImages images={post.Images} />}
      <Content content={post.content} />
      <ButtonContainer>
        <Button>좋아요</Button>
        <Button>공유</Button>
        <Button onClick={handleCommentOpen}>매세지</Button>
        {id && post.User.id === id ? (
          <Button>수정</Button>
        ) : (
          <Button>신고</Button>
        )}
      </ButtonContainer>
      {commentOpen && (
        <>
          <CommentForm post={post} />
          <Comments comments={post.Comments} id={post.id} />
        </>
      )}
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default React.memo(PostCard);

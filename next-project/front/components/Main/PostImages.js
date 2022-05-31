import React, { useCallback } from "react";
import PropTypes from "prop-types";
import useToggle from "../hooks/useToggle";
import styled from "@emotion/styled";
import ImageZoom from "./ImageZoom/index";

const ImageContainer = styled.div({
  display: "flex",
  flexDirection: "row",
});
const Image = styled.img({
  width: "50%",
});

const PostImages = ({ images }) => {
  const [imageZoom, handleImageZoom] = useToggle();

  return (
    <ImageContainer>
      {images.length > 2 ? (
        <>
          <Image src={images[0].src} onClick={handleImageZoom} />
          <div
            style={{
              display: "flex",
              textAlign: "center",
              width: "50%",
              height: "100%",
              verticalAlign: "middle",
              cursor: "pointer",
              backgroundColor: "red",
            }}>
            더 많은 이미지를 보려면 클릭하세요.
          </div>
        </>
      ) : (
        <>
          <Image src={images[0].src} onClick={handleImageZoom} />
          {images[1] && <Image src={images[1].src} onClick={handleImageZoom} />}
        </>
      )}
      {imageZoom && <ImageZoom onClose={handleImageZoom} images={images} />}
    </ImageContainer>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;

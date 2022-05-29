import React from "react";
import { Global } from "@emotion/react";
import PropTypes from "prop-types";
import { Header, ModalDiv } from "./styles";

const ImageZoom = ({ images, onClose }) => {
  console.log(images);
  return (
    <ModalDiv>
      <Global
        styles={{
          ".qqq": {
            color: "red",
          },
        }}
      />
      <Header>
        <h1>이미지 확대</h1>
        <button onClick={onClose}>닫기</button>
      </Header>
      <div className="qqq">이게 변하나?</div>
      {images.map((image, index) => {
        return (
          <div key={image.src}>
            <img src={image.src} width="100px" />
          </div>
        );
      })}
    </ModalDiv>
  );
};

ImageZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageZoom;

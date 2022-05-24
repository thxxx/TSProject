import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const CardM = styled.div({
  boxShadow: "2px 2px 10px rgba(0,0,0,0.4)",
  padding: 10,
  margin: 5,
  width: 200,
});

const Card = ({ image, title }) => {
  return (
    <CardM>
      <img src={image} />
      <div>{title}</div>
    </CardM>
  );
};

Card.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default Card;

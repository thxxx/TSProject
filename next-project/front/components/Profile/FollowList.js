import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/react";

export const ListTitle = styled.div({
  fontSize: "1.7em",
  textAlign: "center",
  marginTop: "10px",
});

export const ListContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  boxShadow: "3px 3px 10px rgba(0,0,0,0.6)",
  padding: "5px",
});

export const Lists = ({ data, children }) => {
  const style = useMemo(
    () => ({
      fontSize: "1.1em",
      margin: "10px",
      border: "1px solid green",
      width: "100%",
    }),
    []
  );

  return (
    <ListContainer>
      {data.map((item, index) => {
        return (
          <div style={style} key={item.id}>
            {item.name}
          </div>
        );
      })}
      {children}
    </ListContainer>
  );
};

const FollowList = ({ header, data }) => {
  return (
    <div>
      <ListTitle>{header}</ListTitle>
      <Lists data={data}>
        <Button>더 불러오기</Button>
      </Lists>
    </div>
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;

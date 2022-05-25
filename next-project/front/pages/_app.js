import React from "react";
import PropTypes from "prop-types";
import { ChakraProvider, Button, ButtonGroup } from "@chakra-ui/react";
import Head from "next/head";
import styled from "@emotion/styled";
import wrapper from "../store/configureStore";

const AllContainer = styled.div({
  padding: "0px 20px",
});

const App = ({ Component }) => {
  return (
    <AllContainer>
      <Head>
        <title>지금은 넥스트 시대</title>
      </Head>
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    </AllContainer>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);

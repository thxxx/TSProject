import styled from "@emotion/styled";

export const ModalDiv = styled.div({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  backgroundColor: "blue",
  top: 0,
  left: 0,
});
export const Header = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.4rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  padding: 5px 0px;

  & > h1 {
    text-align: center;
    color: black;
    width: 100%;
  }

  & > button {
    position: absolute;
    right: 10px;
    border-radius: 5px;
    background-color: orange;
  }
`;

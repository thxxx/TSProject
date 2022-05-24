import Layout from "../components/Layout";
import { Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  return (
    <Layout>
      <div>Hello, Next!</div>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={2}>
        <GridItem rowSpan={2} colSpan={1} bg="tomato">
          <div style={{ width: "100px", margin: "auto auto" }}>
            블로그로 가기
          </div>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={2} bg="papayawhip" />
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
    </Layout>
  );
};

export default Home;

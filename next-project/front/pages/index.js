import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
import PostForm from "../components/Main/PostForm";
import PostCard from "../components/Main/PostCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <Layout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((item, index) => (
        <PostCard key={item.id} post={item} />
      ))}
    </Layout>
  );
};

export default Home;

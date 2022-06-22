import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";
import PostForm from "../components/Main/PostForm";
import PostCard from "../components/Main/PostCard";

const Home = () => {
  console.log("리렌더링");
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <Layout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Home;

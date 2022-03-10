import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-util";

export default function Posts(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

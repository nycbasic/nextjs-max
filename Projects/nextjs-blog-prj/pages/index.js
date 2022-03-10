import Hero from "../components/homepage/hero";
import Featured from "../components/homepage/featured";
import { getFeaturedPosts } from "../helpers/post-util";

export default function Home(props) {
  return (
    <>
      <Hero />
      <Featured posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts();

  return {
    props: {
      posts,
    },
  };
}

import Head from "next/head";
import Hero from "../components/homepage/hero";
import Featured from "../components/homepage/featured";
import { getFeaturedPosts } from "../helpers/post-util";

export default function Home(props) {
  return (
    <>
    <Head>
      <title>Welcome to my Blog!</title>
      <meta name="description" content="I post about programming and web dev!"/>
    </Head>
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

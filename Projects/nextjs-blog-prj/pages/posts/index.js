import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-util";

export default function Posts(props) {
  return (
    <>
    <Head>
      <title>All Posts!</title>
      <meta name="description" content="A list of all my posts"/>
    </Head>
      <AllPosts posts={props.posts} />;
    </>
  );
}

export function getStaticProps(context) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

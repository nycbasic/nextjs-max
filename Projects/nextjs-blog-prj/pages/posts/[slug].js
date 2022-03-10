import Head from 'next/head'
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helpers/post-util";

export default function Post(props) {
  return (
    <>
      <Head>
        <title>{props.posts.title}</title>
        <meta name="description" content={props.posts.excerpt} />
      </Head>
      <PostContent post={props.posts} />
    </>
  );
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;
  const posts = getPostData(slug);
  return {
    props: {
      posts,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const slugs = getPostFiles().map((filename) => {
    return filename.replace(/\.md$/, "");
  });
  const paths = slugs.map(slug => {
    return {
      params: {
        slug 
      }
    }
  })

  return {
    paths,
    fallback: false,
  };
}

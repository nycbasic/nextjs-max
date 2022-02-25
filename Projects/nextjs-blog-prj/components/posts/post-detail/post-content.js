import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const { content } = classes;

const DUMMY_CONTENT = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started With NextJS",
  image: "getting-started-nextjs.png",
  content: "# This is a first post",
  date: "2022-02-10",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_CONTENT.slug}/${DUMMY_CONTENT.image}`;

  return (
    <article className={content}>
      <PostHeader title={DUMMY_CONTENT.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_CONTENT.content}</ReactMarkdown>
    </article>
  );
}

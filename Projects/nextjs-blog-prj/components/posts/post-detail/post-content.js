import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";

const { content } = classes;

export default function PostContent({ post }) {
  const { slug, image, title } = post;
  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    // image(image) {
    //   console.log("From customeRenderes Variable", image.src);
    //   return (
    //     <Image
    //       src={`/images/posts/${slug}/${image.properties.src}`}
    //       alt={image.src}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    // Need to Review
    // code(code) {
    //   const { className, children } = code;
    //   const match = /language-(\w+)/.exec(className || "");
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={match[1]}
    //       children={children}
    //     />
    //   );
    // },
  };

  return (
    <article className={content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

import classes from "./featured.module.css";
import PostsGrid from "../posts/posts-grid";

const { latest } = classes;

export default function Featured({ posts }) {
  return (
    <section className={latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

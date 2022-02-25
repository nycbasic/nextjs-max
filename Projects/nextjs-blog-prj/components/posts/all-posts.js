import PostsGrid from "./posts-grid";
import classes from "./all-posts.module.css";

const { posts } = classes;

export default function AllPosts(props) {
  console.table(props.posts);
  return (
    <section className={posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

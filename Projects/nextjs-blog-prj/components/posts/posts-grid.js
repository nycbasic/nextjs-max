import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const { grid } = classes;

export default function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={grid}>
      {posts.map((post) => {
        const { title, image, date, excerpt, slug } = post;
        return (
          <PostItem
            key={slug}
            title={title}
            img={image}
            date={date}
            text={excerpt}
            slug={slug}
          />
        );
      })}
    </ul>
  );
}

import Link from "next/link";
import classes from "./comment-list.module.css";

function CommentList(props) {
  console.log(props.items);
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {props.items.map((comment) => {
        const { name, text, _id } = comment;
        return (
          <li key={_id}>
            <p>{text}</p>
            <div>
              By <address>{name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;

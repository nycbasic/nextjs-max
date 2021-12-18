import Link from "next/link";
// need to make sure to add classes to use module.css
import classes from "./css/event-item.module.css";

const EventItem = ({ event }) => {
  const { title, image, date, location, id } = event;
  // More information MDN
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location.replace(",", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

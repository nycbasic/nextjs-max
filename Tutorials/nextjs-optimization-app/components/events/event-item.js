import Image from "next/image"
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
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
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location.replace(",", "\n")}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>{" "}
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

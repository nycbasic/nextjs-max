import EventItem from "./event-item";
import classes from "./css/event-list.module.css";

const EventsList = (props) => {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((event) => {
        return <EventItem key={event.id} event={event} />;
      })}
    </ul>
  );
};

export default EventsList;

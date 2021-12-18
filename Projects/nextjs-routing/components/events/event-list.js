import EventItem from "./event-item";

const EventsList = (props) => {
  const { events } = props;

  return (
    <ul>
      {events.map((event) => {
        return <EventItem />;
      })}
    </ul>
  );
};

export default EventsList;

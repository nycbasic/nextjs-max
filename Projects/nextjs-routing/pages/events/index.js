import { useRouter } from "next/router";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const Events = () => {
  const events = getAllEvents();
  const router = useRouter();

  const searchEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default Events;

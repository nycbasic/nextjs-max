import Head from "next/head";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const Events = (props) => {
  const { events } = props;
  const router = useRouter();

  const searchEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to grow!"
        />
      </Head>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList events={events} />
    </div>
  );
};

export default Events;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
}

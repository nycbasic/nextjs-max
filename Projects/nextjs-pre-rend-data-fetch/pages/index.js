import EventsList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function Home(props) {
  const {events} = props;

  return (
    <div>
      <EventsList events={events} />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}

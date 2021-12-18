import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/event-list";

function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}

export default Home;

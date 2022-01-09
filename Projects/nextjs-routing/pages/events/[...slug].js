import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilterEvents = () => {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <ErrorAlert>
        <p>Invalid Filter! Please adjust your values!</p>
        <div className="center">
          <Button link="/">Show All Events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No Events Found for the Choosen Filter!</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
};

export default FilterEvents;

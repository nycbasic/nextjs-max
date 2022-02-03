import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import useSWR from "swr";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilterEvents = (props) => {
  const { events, hasErrors, year, month } = props;
  // const router = useRouter();
  // const filteredData = router.query.slug;

  

  if (hasErrors) {
    return (
      <ErrorAlert>
        <p>Invalid Filter! Please adjust your values!</p>
        <div className="center">
          <Button link="/">Show All Events</Button>
        </div>
      </ErrorAlert>
    );
  }

  if (!events || events.length === 0) {
    return (
      <ErrorAlert>
        <p>No Events Found for the Choosen Filter!</p>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </ErrorAlert>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventsList events={events} />
    </>
  );
};

export default FilterEvents;

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;

  const year = +slug[0];
  const month = +slug[1];

  const events = await getFilteredEvents({
    year: year,
    month: month,
  });
  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: { hasError: true },
    };
  }
  return {
    props: {
      events,
      year,
      month,
    },
  };
}

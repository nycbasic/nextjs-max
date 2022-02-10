import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import EventsList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilterEvents = () => {
  const [loadedEvents, setEvents] = useState();
  const router = useRouter();
  const { slug } = router.query;
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error } = useSWR(
  //   "https://nextjs-dummy-data-default-rtdb.firebaseio.com/events.json", fetcher
  // );
  const fetchData = async () => {
    const res = await fetch(
      "https://nextjs-dummy-data-default-rtdb.firebaseio.com/events.json"
    );
    const data = await res.json();
    const events = [];
    if (data) {
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
    }
    setEvents(events);
  };

  useEffect(() => {
    fetchData().catch((error) => console.log("Something went wrong"));
  }, []);

  console.log(slug);

  const numYear = +slug[0];
  const numMonth = +slug[1];

  const pageHeadData = (
    <Head>
      <title>Selected Events</title>
      <meta
        name="description"
        content={`All Events For ${numMonth}/${numYear}`}
      />
    </Head>
  );

  if (!loadedEvents) {
    return (
      <>
        {pageHeadData}
        <p>Loading...</p>;
      </>
    );
  }

  let filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2022 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
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

// export async function getServerSideProps(context) {
//   const {
//     params: { slug },
//   } = context;

//   const year = +slug[0];
//   const month = +slug[1];

//   const events = await getFilteredEvents({
//     year: year,
//     month: month,
//   });
//   if (
//     isNaN(year) ||
//     isNaN(month) ||
//     year > 2030 ||
//     year < 2021 ||
//     month < 1 ||
//     month > 12
//   ) {
//     return {
//       props: { hasError: true },
//     };
//   }
//   return {
//     props: {
//       events,
//       year,
//       month,
//     },
//   };
// }

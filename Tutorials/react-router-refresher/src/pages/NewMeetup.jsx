import { useHistory } from "react-router-dom";
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetup() {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-8db6f-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetUpForm onMeetupHandler={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;

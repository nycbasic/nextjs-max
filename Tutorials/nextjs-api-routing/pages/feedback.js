import { useState } from "react";
import { buildFeedBackPath, extractFeedback } from "./api/feedback";

const Feedback = (props) => {
  const [feedbackDetails, setFeedback] = useState();
  const loadFeedBackHander = (id) => {
    fetch("/api/feedback/" + id)
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data.feedback);
      });
  };

  const { feedback } = props;
  return (
    <div>
      <h1>Feed Back</h1>
      {feedbackDetails && <p>{feedbackDetails.email}</p>}
      <ul>
        {feedback.map((item) => {
          const { id, text } = item;
          console.log(id)
          return (
            <li key={id}>
              {text}{" "}
              <button onClick={loadFeedBackHander.bind(null, id)}>
                Show Details
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Feedback;

export async function getStaticProps() {
  const filePath = buildFeedBackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedback: data,
    },
  };
}

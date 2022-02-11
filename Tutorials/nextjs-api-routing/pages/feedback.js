import {useState} from "react";
import { buildFeedBackPath, extractFeedback } from "../pages/api/feedback";

const Feedback = (props) => {
 const [feedbackDetails, setFeedback] = useState();
const loadFeedBackHander = (id) => {
   
    fetch('/api/' + id).then(res => res.json()).then(data => {
        setFeedback(data.feedback)
    })
}


  const { feedback } = props;
  return (
    <div>
      <h1>Feed Back</h1>
      {feedbackDetails && <p>{feedbackDetails.email}</p>}
      <ul>
        {feedback.map((item) => {
          const { id, text } = item;
          return <li key={id}>{text} <button onClick={loadFeedBackHander.bind(null, item.id)}>Show Details</button>
          </li>;
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

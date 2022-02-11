import { useRef, useState } from "react";

const Home = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();
  const [feedback, setFeedback] = useState([]);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const text = feedbackInputRef.current.value;
    const data = { email, text };

    console.log("FROM THE FRONT END", data);

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(data),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const getAllFeedback = (e) => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
      console.log(feedback)
  };

  return (
    <div>
      <p>Homepage</p>
      <form action="">
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            cols="30"
            rows="10"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button onClick={submitFormHandler}>Send Feedback</button>
      </form>
      <button onClick={getAllFeedback}>Get all Feedback</button>
      <div>
        <ul>
          {feedback.map((item) => {
            return (
              <li key={item.id}>
                <div>{item.email}</div>
                <div>{item.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;

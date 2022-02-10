import { useRef } from "react";

const Home = () => {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const text = feedbackInputRef.current.value;
    const data = { email, text };

    console.log("FROM THE FRONT END", data)

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
    </div>
  );
};

export default Home;

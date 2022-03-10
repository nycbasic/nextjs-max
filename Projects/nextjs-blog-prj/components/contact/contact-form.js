import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";
const { contact, form, controls, control, actions } = classes;

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const sendContactData = async (contactDetails) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Something went wrong!");
    }
  };

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (err) {
      setRequestError(err.message);
      setRequestStatus("error");
    }
  };

  let notification;

  switch (requestStatus) {
    case "pending":
      notification = {
        status: "pending",
        title: "Sending messsage...",
        message: "Your message is on the way",
      };
      break;
    case "success":
      notification = {
        status: "success",
        title: "Success!",
        message: "Message sent succussfullly",
      };
      break;
    case "error":
      notification = {
        status: "error",
        title: "Error!",
        message: requestError,
      };
      break;
    default: {
    }
  }

  return (
    <section className={contact}>
      <h1>How can I help you?</h1>
      <form className={form} action="" onSubmit={sendMessageHandler}>
        <div className={controls}>
          <div className={control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={controls}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

import React from "react";
import MeetupItems from "./MeetupItems";
import classes from "./MeetUpList.module.css";

function MeetupList(props) {
  const { meetups } = props;

  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

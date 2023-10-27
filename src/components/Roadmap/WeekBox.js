// WeekBox.js
import React from "react";

const WeekBox = ({ weekStartDate, topic }) => (
  <div style={styles.box}>
    <h2>{weekStartDate.toLocaleDateString()}</h2>
    <h3>{topic.title}</h3>
    <ul>
      {topic.subtopics.map((subtopic, subIndex) => (
        <li key={subIndex}>{subtopic}</li>
      ))}
    </ul>
    <p>
      <a href={topic.url}>Learn More</a>
    </p>
  </div>
);

const styles = {
  box: {
    border: "1px solid #ccc",
    padding: "10px",
    width: "400px",
    height: "400px",
  },
};

export default WeekBox;

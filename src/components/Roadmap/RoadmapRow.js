// RoadmapRow.js
import React from "react";
import MonthLabel from "./MonthLabel";
import WeekBox from "./WeekBox";

const RoadmapRow = ({ weeks }) => (
  <div style={styles.row}>
    <MonthLabel month={weeks[0].weekStartDate} />
    {weeks.map((week, weekIndex) => (
      <WeekBox
        key={weekIndex}
        weekStartDate={week.weekStartDate}
        topic={week.topic}
      />
    ))}
  </div>
);

const styles = {
  row: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "5px",
  },
};

export default RoadmapRow;

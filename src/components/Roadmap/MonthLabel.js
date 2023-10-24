// MonthLabel.js
import React from "react";

const MonthLabel = ({ month }) => (
  <div style={styles.monthLabel}>
    {month.toLocaleString("default", { month: "short" })}
  </div>
);

const styles = {
  monthLabel: {
    writingMode: "vertical-rl", // Set writing mode to create vertical text
    textOrientation: "upright", // Ensure the text is upright
  },
};

export default MonthLabel;

import React from "react";

const SearchBanner = () => (
  <div style={styles.searchBanner}>
    <h1>Content Roadmap</h1>
  </div>
);

const styles = {
  searchBanner: {
    width: "100%",
    padding: "10px",
    background: "rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default SearchBanner;

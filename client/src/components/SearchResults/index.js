import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <div>
      <p>Hello: {JSON.stringify(props.results[0])}</p>
      <hr></hr>
      <p>{JSON.stringify(props.results)}</p>
    </div>
  );
}

export default SearchResults;

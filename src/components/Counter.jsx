import { useState } from "react";

function Counter({ current, highest }) {
  return (
    <div className="counter">
      <h2>Current: {current}</h2>
      <h2>Best score: {highest} </h2>
    </div>
  );
}

export default Counter;

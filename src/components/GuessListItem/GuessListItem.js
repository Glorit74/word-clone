import React from "react";
import { range } from "../../utils";

function GuessListItem({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className="cell" key={num}>
          {value ? value.value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default GuessListItem;

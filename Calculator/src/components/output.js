import React from "react";

import "../style.css";

const output = ({ result }) => {
  return (
    <div className="output">
      <p className="output_paragraph">{result}</p>
    </div>
  );
};
export default output;

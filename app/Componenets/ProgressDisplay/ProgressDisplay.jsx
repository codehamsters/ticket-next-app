import "./progressdisplay.css";

import React from "react";

const ProgressDisplay = (params) => {
  return (
    <div className="full-bar">
      <div
        className="progress-bar"
        style={{
          width: `${params.progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;

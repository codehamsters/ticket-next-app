import "../../globals.css";
import "./prioritydisplay.css";

const PriorityDisplay = (params) => {
  return (
    <div className="priority-display">
      <i
        className={`fa-solid fa-fire ${params.priority < 1 ? "inactive" : ""}`}
      ></i>
      <i
        className={`fa-solid fa-fire ${params.priority < 2 ? "inactive" : ""}`}
      ></i>
      <i
        className={`fa-solid fa-fire ${params.priority < 3 ? "inactive" : ""}`}
      ></i>
      <i
        className={`fa-solid fa-fire ${params.priority < 4 ? "inactive" : ""}`}
      ></i>
      <i
        className={`fa-solid fa-fire ${params.priority < 5 ? "inactive" : ""}`}
      ></i>
    </div>
  );
};

export default PriorityDisplay;

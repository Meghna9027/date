import React from "react";
import "./style.css";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function Dates() {
  return (
    <div className="dates" >
      <DateRangePicker />
    </div>
  );
}

export default Dates;

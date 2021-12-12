import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges.selection.startDate);
    console.log(ranges.selection.endDate);
  };
  return (
    <div className="relative">
      <div className="flex justify-center py-8">
        <DateRange
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelect}
        />
      </div>
    </div>
  );
};

export default Calender;

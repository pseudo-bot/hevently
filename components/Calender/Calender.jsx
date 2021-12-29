import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { DateRangePicker } from 'react-date-range';
import { useState } from "react";
import moment from "moment";
import { parseISO } from "date-fns";
import { useContext } from "react";
import { EventContext } from "../../context/EventContext";
const Calender = () => {
  const eventContext = useContext(EventContext);
  console.log(eventContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const disabled = [
    "2021-12-13",
    "2021-12-14",
    "2021-12-15",
    "2021-12-16",
    "2021-12-17",
  ];
  const final = disabled.map(function (val) {
    return parseISO(moment(val).format());
  });
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    eventContext.setStartDate(moment(ranges.selection.startDate).format("YYYY-MM-DD"));
    eventContext.eventData.startDate = moment(ranges.selection.startDate).format(
      "YYYY-MM-DD"
    );
    eventContext.setEndDate(moment(ranges.selection.endDate).format("YYYY-MM-DD"));
    const dates = getDates(
      moment(ranges.selection.startDate).format("YYYY-MM-DD"),
      moment(ranges.selection.endDate).format("YYYY-MM-DD")
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-center py-8 md:hidden">
        <DateRange
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelect}
          disabledDates={final}
        />
      </div>
      <div className="md:flex justify-center py-8 hidden">
        <DateRangePicker 
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelect}
          disabledDates={final}
        />
      </div>
    </div>
  );
};

export default Calender;

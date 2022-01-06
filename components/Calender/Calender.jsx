import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import moment from "moment";
import { useContext } from "react";
import { EventContext } from "../../context/EventContext";

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
const Calender = () => {
  // let disabled = [];
  // const { events, eventsOk, eventError } = useUser();
  // if (eventsOk && events && !eventError) {
  //   disabled = events.map((event) => {
  //     let arr = getDates( event.startDate, event.endDate);
  //     return [...arr];
  //   });
  // }
  // console.log(disabled);
  const eventContext = useContext(EventContext);
  console.log(eventContext);
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
    eventContext.setStartDate(
      moment(ranges.selection.startDate).format("YYYY-MM-DD")
    );
    eventContext.eventData.startDate = moment(
      ranges.selection.startDate
    ).format("YYYY-MM-DD");
    eventContext.setEndDate(
      moment(ranges.selection.endDate).format("YYYY-MM-DD")
    );
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
          // disabledDates={final}
        />
      </div>
      <div className="md:flex justify-center py-8 hidden">
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelect}
          // disabledDates={final}
        />
      </div>
    </div>
  );
};

export default Calender;
import Calender from "../Calender/Calender";
import { useContext } from "react";
import { EventContext } from "../../context/EventContext";

const Schedule = () => {
  const {
    eventData: { startDate, endDate },
  } = useContext(EventContext);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-3xl relative montserrat font-semibold text-center text-gradient capitalize md:text-4xl underline">
				Schedule Event
			</div>
      <Date startDate={startDate} endDate={endDate} />
      <Calender />
    </div>
  );
};

export default Schedule;

const Date = ({ startDate, endDate }) => {
  return (
    <div></div>
  );
};

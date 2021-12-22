import Calender from "../Calender/Calender";
import Question from "../Misc/Question/Question";

import { useContext } from "react";
import { WeddingContext } from "../../context/Wedding";

const Schedule = () => {
  const {
    eventData: { startDate, endDate },
  } = useContext(WeddingContext);
  console.log(startDate);
  console.log(endDate);
  return (
    <div className="flex flex-col gap-4">
      <Question heading="Schedule event" search={false} />
      <Date startDate={startDate} endDate={endDate} />
      <Calender />
    </div>
  );
};

export default Schedule;

const Date = ({ startDate, endDate }) => {
  return (
    <div className="flex w-full justify-center flex-wrap gap-10 pt-6">
      <div>
        <label
          htmlFor="start-date"
          className="text-md text-gray-700 font-semibold tracking-wider"
        >
          Start date
        </label>
        <br />
        <input
          type="text"
          id="start-date"
          disabled
          value={startDate}
          className=" bg-gray-50 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 w-40"
        />
      </div>
      <div>
        <label
          htmlFor="end-date"
          className="text-md text-gray-700 font-semibold tracking-wider"
        >
          End date
        </label>
        <br />
        <input
          type="text"
          id="end-date"
          disabled
          value={endDate}
          className="bg-gray-50 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 w-40"
        />
      </div>
    </div>
  );
};

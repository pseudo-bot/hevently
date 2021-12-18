import Calender from "../Calender/Calender";
import Question from "../Misc/Question/Question";

const Schedule = () => {
  return (
    <div>
      <Question heading="Schedule event" search={false}/>
      <Calender />
    </div>
  );
};

export default Schedule;


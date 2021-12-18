import Calender from '../Calender/Calender';
import Question from '../Misc/Question/Question';

import { useContext } from 'react';
import { WeddingContext } from '../../context/Wedding';

const Schedule = () => {
	const {
		eventData: { startDate, endDate },
	} = useContext(WeddingContext);
	return (
		<div>
			<Question heading="Schedule event" search={false} />
			<Date startDate={startDate} endDate={endDate} />
			<Calender />
		</div>
	);
};

export default Schedule;

const Date = ({ startDate, endDate }) => {
	return (
		<div>
			<label htmlFor="start-date">Start date</label>
			<input type="text" id="start-date" disabled value={startDate} />
			<label htmlFor="end-date">End date</label>
			<input type="text" id="end-date" disabled value={endDate} />
		</div>
	);
};

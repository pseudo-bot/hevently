import Image from 'next/image';
import { useState } from 'react';

import Venue from './Venue';
import Schedule from './Schedule';
import Caterer from './Caterer';
import FormFooter from '../Misc/FormFooter'

const QImage = ({ src }) => {
	return (
		<div className="relative h-screen w-1/4 hidden md:block cover-img">
			<Image
				src={src}
				layout="fill"
				objectFit="cover"
				priority={true}
				objectPosition={'right'}
			/>
		</div>
	);
};

const Event = () => {
	const [position, setPosition] = useState(0);
	const [eventData, setEventData] = useState({
		venue: '',
		startDate: '',
		endDate: '',
		catering: '',
	});

	const nextPosition = () => {
		position++;
		if (position > 3) position = 3;
		setPosition(position);
	};

	const prevPosition = () => {
		position--;
		if (position < 0) position = 0;
		setPosition(position);
	};

	return (
		<div className="relative flex w-full mb-32 border justify-end">
			<div className="fixed left-0 h-screen w-2/5 hidden md:block">
				<div
					style={{
						left: `-${position * 100}%`,
					}}
					className="relative h-screen w-[400%] hidden md:flex transition-all duration-300"
				>
					<QImage src="/form/venue.jpg" />
					<QImage src="/form/calender.jpg" />
					<QImage src="/form/catering.jpg" />
					<QImage src="/form/wedding.jpg" />
				</div>
			</div>
			<div className="md:w-3/5 w-full relative flex items-center justify-center pt-32 right-0">
				<div className="formbg h-full md:w-3/5 w-full fixed top-0 z-0"></div>

				{position === 0 ? <Venue /> : null}
				{position === 1 ? <Schedule /> : null}
				{position === 2 ? <Caterer /> : null}
				{position === 3 ? <Venue /> : null}

				<FormFooter
					nextPosition={nextPosition}
					prevPosition={prevPosition}
					position={position}
				/>
			</div>
		</div>
	);
};

export default Event;

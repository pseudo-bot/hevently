import Image from 'next/image';
import { useState } from 'react';

import Venue from './Venue';
import Schedule from './Schedule';
import Caterer from './Caterer';
import FormFooter from '../Misc/FormFooter';

const QImage = ({ src }) => {
	return (
		<div className="relative h-full w-full hidden md:block">
			<Image src={src} layout="fill" objectFit="cover" priority={true} />
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
		<div className="w-screen">
			<div className="fixed w-2/5 left-0 h-screen">
				<div
					className={`${
						position == 0 ? 'opacity-100' : 'opacity-0'
					} h-full w-full transition-all duration-500`}
				>
					<QImage src="/form/venue.jpg" />
				</div>
				<div
					className={`${
						position == 1 ? 'opacity-100' : 'opacity-0'
					} h-full w-full transition-all duration-500`}
				>
					<QImage src="/form/calender.jpg" />
				</div>
				<div
					className={`${
						position == 2 ? 'opacity-100' : 'opacity-0'
					} h-full w-full transition-all duration-500`}
				>
					<QImage src="/form/catering.jpg" />
				</div>
				<div
					className={`${
						position == 3 ? 'opacity-100' : 'opacity-0'
					} h-full w-full transition-all duration-500`}
				>
					<QImage src="/form/venue.jpg" />
				</div>
			</div>
			<div className="absolute w-3/5 right-0 formbg py-32 flex items-center justify-center">
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

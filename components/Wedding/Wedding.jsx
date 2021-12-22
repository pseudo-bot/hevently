import Image from 'next/image';
import { useState, useContext } from 'react';

import Venue from './Venue';
import Schedule from './Schedule';
import FormFooter from '../Misc/FormFooter';
import Alert from '../Misc/Alert';

import venue from '../../public/form/venue.jpg';
import catering from '../../public/form/catering.jpg';
import calender from '../../public/form/calender.jpg';

import { WeddingContext } from '../../context/Wedding';

const QImage = ({ src }) => {
	return (
		<div className="relative h-full w-full hidden md:block">
			<Image
				src={src}
				layout="fill"
				objectFit="cover"
				priority={true}
				placeholder="blur"
			/>
		</div>
	);
};

const Images = ({ position }) => {
	return (
		<>
			<div
				className={`${
					position == 0 ? 'opacity-100' : 'opacity-0'
				} h-full w-full transition-all duration-1000 absolute inset-0`}
			>
				<QImage src={venue} />
			</div>
			<div
				className={`${
					position == 1 ? 'opacity-100' : 'opacity-0'
				} h-full w-full transition-all duration-1000 absolute inset-0`}
			>
				<QImage src={calender} />
			</div>
			<div
				className={`${
					position == 2 ? 'opacity-100' : 'opacity-0'
				} h-full w-full transition-all duration-1000 absolute inset-0`}
			>
				<QImage src={catering} />
			</div>
			<div
				className={`${
					position == 3 ? 'opacity-100' : 'opacity-0'
				} h-full w-full transition-all duration-1000 absolute inset-0`}
			>
				<QImage src={venue} />
			</div>
		</>
	);
};

const Wedding = ({ venues }) => {
	const [open, setOpen] = useState(false);

	const {
		eventData: { venue },
	} = useContext(WeddingContext);

	const [position, setPosition] = useState(0);

	const nextPosition = () => {
		if (!venue && position === 0) {
			setOpen(true);
			return;
		}

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
			<div className="z-50">
				<Alert
					open={open}
					setOpen={setOpen}
					severity={'warning'}
					msg={'Please select a venue to continue'}
				/>
			</div>

			<div className="fixed w-full h-screen right-0"></div>

			<div className="fixed w-2/5 hidden md:block left-0 h-screen z-10">
				<Images position={position} />
			</div>

			<div className="absolute w-full md:w-3/5 right-0 py-32 flex items-center justify-center">
				{position === 0 ? <Venue venues={venues} /> : null}
				{position === 1 ? <Schedule /> : null}
				{position === 2 ? <Venue venues={venues} /> : null}
				{position === 3 ? <Venue venues={venues} /> : null}

				<FormFooter
					nextPosition={nextPosition}
					prevPosition={prevPosition}
					position={position}
				/>
			</div>
		</div>
	);
};

export default Wedding;

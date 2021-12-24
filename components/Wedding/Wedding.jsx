import Image from 'next/image';
import { useState, useContext } from 'react';

import Venue from './Venue';
import Schedule from './Schedule';
import FormFooter from '../Misc/FormFooter';
import Alert from '../Misc/Alert';
import Guests from '../Misc/Guests';

import formCover from '../../public/form/form_cover.png';

import { WeddingContext } from '../../context/Wedding';

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

			<div className="fixed opacity-30 w-screen h-screen right-0">
				<Image src={formCover} objectFit="cover" />
			</div>

			<div className="absolute w-full right-0 py-32 flex items-center justify-center">
				{position === 0 ? <Venue venues={venues} /> : null}
				{position === 1 ? <Schedule /> : null}
				{position === 2 ? <Guests /> : null}
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

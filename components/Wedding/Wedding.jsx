import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@mui/material';

import Venue from './Venue';
import Schedule from './Schedule';
import DotsMobileStepper from '../Misc/Dot';

const Question = ({ children, next, prev }) => {
	return (
		<div className="flex items-center justify-center w-full relative formbg h-screen">
			{children}
		</div>
	);
};

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
		<div className="relative flex h-screen overflow-hidden">
			<div className="relative h-screen w-2/5 hidden md:block">
				<div
					style={{
						left: `-${position * 100}%`,
					}}
					className="relative h-screen w-[400%] hidden md:flex transition-all duration-300"
				>
					<QImage src="/form/wedding.jpg" />
					<QImage src="/form/wedding.jpg" />
					<QImage src="/form/wedding.jpg" />
					<QImage src="/form/wedding.jpg" />
				</div>
			</div>
			<div
				style={{
					top: `-${position * 100}%`,
				}}
				className="md:w-3/5 w-full relative h-[400vh] transition-all duration-300"
			>
				<Question>
					<Venue />
				</Question>
				<Question>
					<Schedule />
				</Question>
				<Question>
					<Venue />
				</Question>
				<Question>
					<Venue />
				</Question>

				<div className="fixed top-[90vh] h-20 md:w-3/5 w-full flex justify-center gap-8 items-center border-gray-800">
					<Button
						onClick={prevPosition}
						variant="contained"
						disabled={position === 0}
						size="large"
					>
						Previous
					</Button>
					<DotsMobileStepper activeStep={position} />
					<Button
						onClick={nextPosition}
						variant="contained"
						disabled={position === 3}
						size="large"
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Event;

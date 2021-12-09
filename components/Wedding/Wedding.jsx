import Image from 'next/image';
import { useState } from 'react';

import Venue from './Venue';

const Question = ({ children, next, prev }) => {
	return (
		<div className="flex items-center justify-center w-full relative formbg h-screen">
			{children}

			<div
				className="absolute bottom-10 right-10 bg-blue-600 p-4 rounded-full text-gray-50 w-28 text-center cursor-pointer"
				onClick={next}
			>
				Next
			</div>
			<div
				className="absolute bottom-32 w-28 text-center right-10 bg-blue-600 p-4 rounded-full text-gray-50 cursor-pointer"
				onClick={prev}
			>
				Previous
			</div>
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
		<div className="flex h-screen overflow-hidden">
			<div className="relative h-screen w-2/5 hidden md:block">
				<div style={{
					left: `-${position * 100}%`
				}} className="relative h-screen w-[400%] hidden md:flex transition-all duration-300">
					<div className="relative h-screen w-1/4 hidden md:block">
						<Image
							src="/form/wedding2.jpg"
							layout="fill"
							objectFit="cover"
							priority={true}
							objectPosition={'right'}
						/>
					</div>
					<div className="relative h-screen w-1/4 hidden md:block">
						<Image
							src="/events/corporate.jpg"
							layout="fill"
							objectFit="cover"
							priority={true}
							objectPosition={'right'}
						/>
					</div>
					<div className="relative h-screen w-1/4 hidden md:block">
						<Image
							src="/events/wedding.jpg"
							layout="fill"
							objectFit="cover"
							priority={true}
							objectPosition={'right'}
						/>
					</div>
					<div className="relative h-screen w-1/4 hidden md:block">
						<Image
							src="/events/social.jpg"
							layout="fill"
							objectFit="cover"
							priority={true}
							objectPosition={'right'}
						/>
					</div>
				</div>
			</div>
			<div
				style={{
					top: `-${position * 100}%`,
				}}
				className="md:w-3/5 w-full relative h-[400vh] transition-all duration-300"
			>
				<Question next={nextPosition} prev={prevPosition}>
					<Venue />
				</Question>
				<Question next={nextPosition} prev={prevPosition}>
					<Venue />
				</Question>
				<Question next={nextPosition} prev={prevPosition}>
					<Venue />
				</Question>
				<Question next={nextPosition} prev={prevPosition}>
					<Venue />
				</Question>
			</div>
		</div>
	);
};

export default Event;

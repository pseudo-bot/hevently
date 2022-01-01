import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'animate.css';

function Cover() {
	const [start, setStart] = useState(false);
	const [end, setEnd] = useState(false);
	const [mid, setMid] = useState(false);

	useEffect(() => {
		const startTime = setTimeout(() => {
			setStart(true);
		}, 0);

		const midTime = setTimeout(() => {
			setMid(true);
		}, 1500);

		const endTime = setTimeout(() => {
			setEnd(true);
		}, 3000);

		return () => {
			clearTimeout(startTime);
			clearTimeout(midTime);
			clearTimeout(endTime);
		};
	}, []);

	return (
		<div>
			<div className="cover h-screen w-screen absolute parallax"></div>
			<div className="relative h-screen flex items-center justify-center flex-col">
				<div className="text-gray-50 text-[90px] dancing col md:text-[120px] font-bold animate__animated animate__bounceInDown absolute top-1/4">
					hevently
				</div>
				<div className="text-gray-50 font-medium tracking-wide kalam text-[1.8rem] flex flex-col gap-2 absolute top-1/2">
					<div
						className={`h-1 ${
							start && mid && end ? 'w-full' : 'w-0'
						} bg-gray-50 rounded-full my-4 transition-all duration-700 -translate-x-1/2 left-1/2 relative`}
					></div>
					{start ? (
						<div className="animate__animated animate__fadeInLeft kalam text-center">
							small team.
						</div>
					) : null}
					{mid ? (
						<div className="animate__animated animate__fadeInLeft kalam text-center">
							big moments.
						</div>
					) : null}
					{end ? (
						<div className="animate__animated animate__fadeInLeft kalam text-center">
							a lifetime of happiness.
						</div>
					) : null}
					<div
						className={`h-1 ${
							start && mid && end ? 'w-full' : 'w-0'
						} bg-gray-50 rounded-full my-4 transition-all duration-700 -translate-x-1/2 left-1/2 relative`}
					></div>
				</div>
				<div className="absolute bottom-10 cursor-pointer">
					<div className="scroll"></div>
				</div>
			</div>
		</div>
	);
}

export default Cover;

const Explore = () => {
	return (
		<div className="relative text-gray-50 text-xl z-10 border-2 w-36 flex items-center justify-center h-12 cursor-pointer rounded-full overflow-hidden backdrop-blur-md">
			<div className="z-10 tracking-wide">Explore</div>
		</div>
	);
};

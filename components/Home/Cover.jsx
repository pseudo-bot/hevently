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
				<div className="cover-heading text-gray-50 text-[6.5rem] dancing col font-bold animate__animated animate__bounceInDown absolute top-1/4">
					hevently
				</div>
				<div className="text-gray-50 tracking-wide kalam text-[1.8rem] flex flex-col gap-2 absolute top-1/2">
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

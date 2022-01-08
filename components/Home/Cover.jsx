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
			<div className="relative h-screen flex items-center justify-center flex-col gap-20">
				<div className="cover-heading text-gray-50 text-[5.5rem] md:text-[6.5rem] dancing col font-bold animate__animated animate__bounceInDown ">
					hevently
				</div>
				<TagLine>you plan | we organize</TagLine>
				<div className='relative w-full h-[7.2rem]'>
					<div className="text-gray-50 tracking-wide kalam text-[1.8rem] flex flex-col gap-2 absolute w-full h-full">
						{start ? <AnimateText>small team.</AnimateText> : null}
						{mid ? <AnimateText>big moments.</AnimateText> : null}
						{end ? <AnimateText>a lifetime of happiness.</AnimateText> : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cover;

const TagLine = ({ children }) => {
	return <div className='text-gray-50 sm:text-5xl text-4xl font-semibold capitalize animate__animated animate__fadeIn relative ubuntu tracking-wide cover-heading'>{children}</div>;
};

const AnimateText = ({ children }) => {
	return (
		<div className="animate__animated animate__fadeInLeft text-2xl text-center text-semibold">
			{children}
		</div>
	);
};

import 'animate.css';
import { useState, useEffect } from 'react';

function Cover() {
	const [step, setStep] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			step++;
			if (step == 4) step = 0;
			setStep(step);
		}, 7000);
		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className="relative h-screen flex items-center justify-center flex-col">
			<div
				className={`${
					step === 0 ? 'opacity-100' : 'opacity-0'
				} cover cover1 h-full w-full absolute transition-all`}
			></div>

			<div
				className={`${
					step === 1 ? 'opacity-100' : 'opacity-0'
				} cover cover2 h-full w-full absolute transition-all`}
			></div>

			<div
				className={`${
					step === 2 ? 'opacity-100' : 'opacity-0'
				} cover cover3 h-full w-full absolute transition-all`}
			></div>

			<div
				className={`${
					step === 3 ? 'opacity-100' : 'opacity-0'
				} cover cover4 h-full w-full absolute transition-all`}
			></div>

			<div className="text-gray-50 text-[90px] dancing col md:text-[120px] font-extrabold animate__animated animate__bounceInDown">
				hevently
			</div>

			<Explore />
		</div>
	);
}

export default Cover;


const Explore = () => {
	return (
		<div
		 className='relative text-gray-50 text-xl z-10 border-2 w-36 flex items-center justify-center h-12 cursor-pointer rounded-full overflow-hidden backdrop-blur-md'>
			<div className='z-10 tracking-wide'>Explore</div>
		</div>
	);
}
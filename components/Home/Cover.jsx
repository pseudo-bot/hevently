import 'animate.css';
import { useState } from 'react';

function Cover() {
	const [step, setStep] = useState(0);

	setInterval(() => {
		step++;
		if (step == 4) step = 0;
		setStep(step);
	}, 10000);

	return (
		<div className="relative h-screen flex items-center justify-center">
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
		</div>
	);
}

export default Cover;

import Image from 'next/image';

import 'animate.css';

function Cover() {
	return (
		<div className="relative h-screen flex items-center justify-center flex-col">
			<div
				className={`cover cover1 h-full w-full absolute transition-all`}
			></div>

			<div className="text-gray-50 text-[90px] dancing col md:text-[120px] font-extrabold animate__animated animate__bounceInDown">
				hevently
			</div>

			<Explore />

			<div className="absolute bottom-10 animate-bounce cursor-pointer">
				<Image
					src="/events/scroll-bar.png"
					height={56}
					width={56}
					alt="Scroll Down"
				/>
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

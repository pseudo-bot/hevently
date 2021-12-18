import Arrow from '@mui/icons-material/ArrowForwardIosRounded';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import wedding from '../../public/events/wedding.jpg';
import corporate from '../../public/events/corporate.jpg';
import social from '../../public/events/social.jpg';
import birthday from '../../public/events/bday.jpg';

const Event = ({ image, title, desc }) => {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal((prev) => !prev);
	};

	return (
		<div className="flex flex-col p-4 py6 rounded-lg items-center gap-10 lg:w-[40%] text-gray-700 max-w-[32rem] relative border border-gray-300 shadow-lg">
			<div className="uppercase font-semibold text-center text-xl tracking-wide z-10">
				{title}
			</div>
			<div className="w-72 h-72 overflow-hidden relative rounded-full group cursor-pointer hover:shadow-2xl transition-all duration-500">
				<Image
					className="absolute border bg-center transition-all duration-500 cursor-pointer group-hover:scale-110"
					src={image}
					alt={title}
					layout="fill"
					objectFit="cover"
					placeholder="blur"
				/>
				<div className="bg-[#000] w-full h-0 absolute opacity-60 group-hover:h-full transition-all duration-500"></div>
				<div className="bg-gray-200 absolute w-14 h-14 opacity-0 transition-all duration-500 group-hover:opacity-80 rounded-full top-28 left-1/2 -translate-x-1/2 flex justify-center items-center">
					<button onClick={openModal}>
						<Arrow fontSize="medium" />
					</button>
				</div>
			</div>
			<div className="text-justify px-10 z-10">{desc}</div>
			<Modal showModal={showModal} setShowModal={setShowModal} title={title} />
		</div>
	);
};

function Events() {
	return (
		<div className="relative px-4 py-1 pb-10 border top-0">
			<div className="dancing text-5xl capitalize md:text-7xl text-gray-700 font-bold text-center my-8">
				events
			</div>
			<div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-20 items-center">
				<Event
					title="Weddings"
					image={wedding}
					desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi aut voluptatem blanditiis aspernatur modi nulla?"
				/>
				<Event
					title="Social Gathering"
					image={social}
					desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi aut voluptatem blanditiis aspernatur modi nulla?"
				/>
				<Event
					title="Birthdays"
					image={birthday}
					desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi aut voluptatem blanditiis aspernatur modi nulla?"
				/>
				<Event
					title="Corporate Events"
					image={corporate}
					desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi aut voluptatem blanditiis aspernatur modi nulla?"
				/>
			</div>
		</div>
	);
}

export default Events;

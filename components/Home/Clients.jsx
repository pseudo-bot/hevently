import { Swiper, SwiperSlide } from 'swiper/react';
import Quote from '@mui/icons-material/FormatQuoteRounded';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import SwiperCore, { EffectCoverflow, Pagination, A11y } from 'swiper';

SwiperCore.use([EffectCoverflow, A11y]);

const Review = ({ review, profile, name, work }) => {
	return (
		<div className="bg-[#fff] rounded w-[24rem] h-[22rem] review-card shadow-xl pt-16 px-5 flex flex-col gap-10 relative">
			<div className="right-10 absolute top-2">
				<Quote color="action" sx={{ fontSize: 56 }} />
			</div>
			<div className="text-justify">{review}</div>
			<div className="absolute bottom-4 rounded-full flex w-full gap-16">
				<img src={profile} alt="profile" className="h-20 w-20 rounded-full" />
				<div className="font-medium text-lg text-gray-800">
					{name}
					<div className="text-gray-600 text-sm">{work}</div>
				</div>
			</div>
		</div>
	);
};

export default function App() {
	return (
		<>
			<div className="bg-gradient-to-r from-blue-500 to-blue-700 p-10 pt-2">
				<div className="dancing capitalize text-7xl text-gray-200 font-bold text-center my-10">
					Our Clients
				</div>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={1}
					breakpoints={{
						720: {
							slidesPerView: 2,
						},
						980: {
							slidesPerView: 3,
						},
					}}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2,
						slideShadows: false,
					}}
					loop={true}
					pagination={true}
					className="swiper"
				>
					<SwiperSlide>
						<Review
							review="Best website very helpful in managing events i the best one yet. The bestest feature my wedding great because this site exits wow"
							name="Will Bates"
							profile="/clients/will.jpg"
							work="Worker at Linux"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Review
							review="Best website very helpful in managing events i the best one yet. The bestest feature my wedding great because this site exits wow"
							name="Tinus Lorvalds"
							profile="/clients/tinus.jpg"
							work="NVIDIA Enthusiast"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Review
							review="Best website very helpful in managing events i the best one yet. The bestest feature my wedding great because this site exits wow"
							name="Alicia"
							profile="/clients/will.jpg"
							work="CEO TikTok"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

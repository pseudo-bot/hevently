import StarIcon from '@mui/icons-material/Star';
import { Divider } from '@mui/material';

const Star = () => {
	return (
		<StarIcon
			sx={{
				fontSize: '2ch',
				color: '#eba800',
			}}
		/>
	);
};

const ItemCard = ({ venue, city, ratings, capacity }) => {
	return (
		<div data-aos="fade-up">
			<div className="flex flex-col w-full gap-2 p-4 border-blue-400 rounded-md shadow-md bg-cgray-50 cursor-pointer hover:scale-105 transition-all duration-200">
				<div className="text-xl text-gray-800 uppercase font-semibold tracking-wide">
					{venue}
				</div>
				<div className="text-lg text-gray-600 tracking-wide">{city}</div>
				<Divider variant="middle" />
				<div className="text-sm text-gray-600 mt-2">
					Seating Capacity: {capacity}
				</div>
				<div
					style={{
						width: `${Math.floor(ratings * 2)}ch`,
					}}
					className="mt-2 flex overflow-hidden"
				>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
			</div>
		</div>
	);
};

export default ItemCard;

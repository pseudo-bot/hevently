import StarIcon from '@mui/icons-material/Star';
import { Divider, Rating } from '@mui/material';

const ItemCard = ({ value, city, ratings, capacity }) => {
	return (
		<div data-aos="fade-up">
			<div className="flex flex-col w-full gap-2 p-4 border-blue-400 rounded-md shadow-md bg-cgray-50 cursor-pointer hover:scale-105 transition-all duration-200">
				<div className="text-xl text-gray-800 uppercase font-semibold tracking-wide">
					{value}
				</div>
				<div className="text-lg text-gray-600 tracking-wide">{city}</div>
				<Divider variant="middle" />
				<div className="text-sm text-gray-600 my-2">
					Seating Capacity: {capacity}
				</div>
				<div>
					<Rating name="User Ratings" value={ratings} readOnly precision={0.5} size="small"/>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;

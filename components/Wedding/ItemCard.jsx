import StarIcon from '@mui/icons-material/Star';

const ItemCard = ({ venue, city, ratings, capacity }) => {
	return (
		<div
			data-aos="fade-up"
			className="flex flex-col w-full gap-2 p-4 border-2 border-blue-400 rounded-md shadow-md"
		>
			<div className="text-xl text-gray-800">{venue}</div>
			<div className="flex justify-between text-gray-600 text-sm">
				<div className="text-lg text-gray-600">{city}</div>

				<div className='text-xl dancing font-extrabold'>
					{ratings} <StarIcon fontSize="medium" sx={{position: 'relative', bottom: '3px', color: '#c98300'}}/>
				</div>
			</div>
			<div className="text-sm text-gray-600">Seating Capacity: {capacity}</div>
		</div>
	);
};

export default ItemCard;

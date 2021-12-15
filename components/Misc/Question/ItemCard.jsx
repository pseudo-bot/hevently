import { Divider, Rating } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import RoomIcon from '@mui/icons-material/Room';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Dot from '@mui/icons-material/CenterFocusStrong';
import Rupee from '@mui/icons-material/CurrencyRupee';
import Image from 'next/image';

const ItemCard = ({
	value,
	city,
	ratings,
	capacity,
	veg,
	nonveg,
	display,
	address,
}) => {
	return (
		<div data-aos="fade-up">
			<div className="flex border-blue-400 rounded-md shadow-md bg-cgray-50 cursor-pointer hover:scale-105 transition-all duration-200 lg:items-center lg:flex-row relative h-full w-full p-4 flex-col gap-10 lg:gap-0">
				<div className="flex flex-col lg:w-[70%] w-full gap-2 px-2 order-3 lg:order-1">
					<div className="text-xl text-gray-800 uppercase font-semibold tracking-wide">
						{value}
					</div>
					<div className="text-lg text-gray-600 tracking-wide flex">
						<LocationCityIcon
							sx={{
								fontSize: 20,
								marginRight: '6px',
								marginTop: '4px',
							}}
						/>
						{address}
					</div>
					<div className="text-md text-gray-600 tracking-wide">
						<RoomIcon
							sx={{
								fontSize: 20,
								marginRight: '6px',
								color: 'blue',
							}}
						/>
						{city}
					</div>
					<Divider variant="middle" />
					<div>
						<Rating
							name="User Ratings"
							value={ratings}
							readOnly
							precision={0.5}
							size="medium"
						/>
					</div>
					<div className="text-md text-gray-600 my-2">
						<PeopleAltIcon
							sx={{
								fontSize: 20,
								marginRight: '6px',
							}}
						/>
						{capacity}
					</div>
					<div className="text-md text-gray-600 my-2">
						<Dot
							sx={{
								fontSize: 20,
								marginRight: '6px',
								color: 'green',
							}}
						/>
						<Rupee
							sx={{
								fontSize: 20,
							}}
						/>
						{veg}
					</div>
					<div className="text-md text-gray-600 my-2">
						<Dot
							sx={{
								fontSize: 20,
								marginRight: '6px',
								color: 'red',
							}}
						/>
						<Rupee
							sx={{
								fontSize: 20,
							}}
						/>
						{nonveg}
					</div>
				
				</div>

				<div className="w-full lg:w-[40%] overflow-hidden flex items-center justify-center order-2">
					<Image
						src={display}
						height={200}
						width={300}
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;

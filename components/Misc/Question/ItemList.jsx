import { useEffect, useContext } from 'react';
import { WeddingContext } from '../../../context/Wedding';

import ItemCard from './ItemCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ItemList = ({ list, value, weddingVenue }) => {
	const {
		eventData: { venue },
		setVenue,
	} = useContext(WeddingContext);

	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="flex flex-col gap-10 z-10 w-full">
			{list
				.filter((e) => {
					if (value === '') return true;
					let s =
						e.value.toLowerCase() +
						' ' +
						e.address.toLowerCase() +
						' ' +
						e.city.toLowerCase();
					return value && s.includes(value);
				})
				.map(
					({
						_id,
						value,
						address,
						city,
						ratings,
						capacity,
						veg,
						nonveg,
						display,
					}) => {
						let selected = false;
						if (venue === _id) selected = true;
						return (
							<ItemCard
								key={_id}
								value={value}
								city={city}
								ratings={ratings}
								capacity={capacity}
								address={address}
								veg={veg}
								nonveg={nonveg}
								display={display}
								handleBooking={() => {
									setVenue(_id);
								}}
								booked={selected}
							/>
						);
					}
				)}
		</div>
	);
};

export default ItemList;

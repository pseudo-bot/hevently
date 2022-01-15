import { useEffect, useContext } from 'react';
import { EventContext } from '../../../context/EventContext';
import ItemCard from './ItemCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ItemList = ({ list, value }) => {
	const {
		eventData: { venue },
		setVenue,
	} = useContext(EventContext);

	useEffect(() => {
		Aos.init({
			duration: 600,
			mirror: true,
		});
	}, []);

	return (
		<div className="flex flex-wrap gap-4 z-10 w-full justify-center">
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
						id,
						value,
						address,
						city,
						ratings,
						capacity,
						veg,
						nonveg,
						display,
						host,
					}) => {
						let selected = false;
						if (venue && venue.id === id) selected = true;
						return (
							<ItemCard
								key={id}
								value={value}
								city={city}
								ratings={ratings}
								capacity={capacity}
								address={address}
								veg={veg}
								nonveg={nonveg}
								display={display}
								handleBooking={() => {
									setVenue({
										id,
										value,
										city,
										address,
										ratings,
										host,
									});
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

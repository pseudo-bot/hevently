import { useEffect } from 'react';

import ItemCard from './ItemCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ItemList = ({ list, city, venue }) => {
	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	console.log(city);
	return (
		<div className="flex flex-col gap-6 z-10">
			{list
				.filter(
					(e) =>
						(e.city.toLowerCase().includes(city) && city != '') ||
						(e.venue.toLowerCase().includes(venue) && city != '')
				)
				.map(({ venue, city, ratings, capacity }) => {
					return (
						<ItemCard
							venue={venue}
							city={city}
							ratings={ratings}
							capacity={capacity}
						/>
					);
				})}
		</div>
	);
};

export default ItemList;

import { useEffect } from 'react';

import ItemCard from './ItemCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ItemList = ({ list, venue }) => {
	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="flex flex-col gap-6 z-10 w-full">
			{list
				.filter((e) => {
					if (venue === "") return true;
					let s = e.venue.toLowerCase() + ' ' + e.city.toLowerCase();
					return venue && s.includes(venue);
				})
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

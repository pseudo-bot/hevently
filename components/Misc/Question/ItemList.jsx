import { useEffect } from 'react';

import ItemCard from './ItemCard';

import Aos from 'aos';
import 'aos/dist/aos.css';

const ItemList = ({ list, value }) => {
	useEffect(() => {
		Aos.init({
			duration: 600,
		});
	}, []);
	return (
		<div className="flex flex-col gap-6 z-10 w-full">
			{list
				.filter((e) => {
					if (value === "") return true;
					let s = e.value.toLowerCase() + ' ' + e.city.toLowerCase();
					return value && s.includes(value);
				})
				.map(({ value, city, ratings, capacity }) => {
					return (
						<ItemCard
							value={value}
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

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
					if (value === '') return true;
					let s = e.value.toLowerCase() + ' ' + e.city.toLowerCase();
					return value && s.includes(value);
				})
				.map(
					({
						value,
						address,
						city,
						ratings,
						capacity,
						veg,
						nonveg,
						display,
					}) => {
						return (
							<ItemCard
								value={value}
								city={city}
								ratings={ratings}
								capacity={capacity}
								address={address}
								veg={veg}
								nonveg={nonveg}
								display={display}
							/>
						);
					}
				)}
		</div>
	);
};

export default ItemList;

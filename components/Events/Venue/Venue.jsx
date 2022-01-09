import Search from './Search';

const Venue = ({ venues, heading }) => {
	return (
		<>
			<Search
				search={true}
				list={venues}
				heading={heading}
				label="Venue"
				weddingVenue={true}
			/>
		</>
	);
};

export default Venue;

const RaceDate = (props) => {
	const date = new Date(props.raceStartDate).toLocaleDateString();

	return <p>{date}</p>;
};

export default RaceDate;

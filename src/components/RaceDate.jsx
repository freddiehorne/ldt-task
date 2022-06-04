const RaceDate = (props) => {
	const date = new Date(props.raceStartDate);

	return <p>{date.toLocaleDateString()}</p>;
};

export default RaceDate;

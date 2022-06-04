const Matches = (props) => {
	const { data, confirmedData } = props;
	const screenData =
		data.length < confirmedData.length
			? `${data.length} matches`
			: `${confirmedData.length} entries`;

	return <p>{screenData}</p>;
};

export default Matches;

const Matches = (props) => {
	const { data, originalData } = props;
	return (
		<>{data.length < originalData.length && <p>{data.length} matches</p>}</>
	);
};

export default Matches;

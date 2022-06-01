const Name = (props) => {
	const { lastName, firstName } = props.raceStartlist;
	return (
		<p>
			{`${lastName[0].toUpperCase() + lastName.slice(1)}, ${
				firstName[0].toUpperCase() + firstName.slice(1)
			}`}
		</p>
	);
};

export default Name;
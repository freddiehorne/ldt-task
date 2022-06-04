const TicketPrice = (props) => {
	const price = new Intl.NumberFormat("en-UK", {
		style: "currency",
		currency: "GBP",
	}).format(props.ticketPrice / 100);

	return (
		<p>
			<strong>{price}</strong>
		</p>
	);
};

export default TicketPrice;

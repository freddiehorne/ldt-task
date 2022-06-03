const TicketPrice = (props) => {
	const price = props.ticketPrice / 100;
	return (
		<p>
			<strong>
				{new Intl.NumberFormat("en-UK", {
					style: "currency",
					currency: "GBP",
				}).format(price)}
			</strong>
		</p>
	);
};

export default TicketPrice;

const TotalPrice = (props) => {
	const totalPrice = `Total sales:
	${new Intl.NumberFormat("en-UK", {
		style: "currency",
		currency: "GBP",
	}).format(props.ticketSaleTotal / 100)}`;

	return (
		<p>
			<strong>{totalPrice}</strong>
		</p>
	);
};

export default TotalPrice;

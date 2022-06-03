const TotalPrice = (props) => {
	const totalPrice = props.ticketSaleTotal / 100;
	return (
		<p>
			<strong>
				{`Total sales:
				${new Intl.NumberFormat("en-UK", {
					style: "currency",
					currency: "GBP",
				}).format(totalPrice)}`}
			</strong>
		</p>
	);
};

export default TotalPrice;

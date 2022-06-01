import UserInput from "./UserInput";
import RaceStartlist from "./RaceStartlist";

const Dashboard = (props) => {
	const { data, onInput } = props;
	// an array of all the ticket prices is created so that the contents can be summed with the reduce method and displayed on the page
	const ticketPrices = [];
	data.forEach((objTicketPrice) =>
		ticketPrices.push(objTicketPrice.ticketPrice.value)
	);
	const ticketSaleTotal = ticketPrices.reduce((a, b) => a + b, 0);

	return (
		<div>
			<UserInput data={data} onInput={onInput} />
			<p>&#163; {ticketSaleTotal}</p>
			<RaceStartlist data={data} />
		</div>
	);
};

export default Dashboard;

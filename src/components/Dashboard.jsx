import UserInput from "./UserInput";
import TotalPrice from "./TotalPrice";
import RaceStartlist from "./RaceStartlist";
import styles from "../styles/Dashboard.module.scss";

const Dashboard = (props) => {
	const { data, onInput } = props;
	// an array of all the ticket prices is created so that the contents can be summed with the reduce method and displayed on the page
	const ticketPrices = [];
	data.forEach((objTicketPrice) =>
		ticketPrices.push(objTicketPrice.ticketPrice.value)
	);
	const ticketSaleTotal = ticketPrices.reduce((a, b) => a + b, 0);

	return (
		<div className={styles.main}>
			<h1 className={styles.heading1}>F Horne LDT Task</h1>
			<h3 className={styles.heading3}>
				Filter by either typing or using the dropdown menu
			</h3>
			<div className={styles.top}>
				<UserInput data={data} onInput={onInput} />
				<TotalPrice ticketSaleTotal={ticketSaleTotal} />
			</div>
			<RaceStartlist data={data} />
		</div>
	);
};

export default Dashboard;

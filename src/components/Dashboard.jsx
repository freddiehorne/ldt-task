import UserInput from "./UserInput";
import Matches from "./Matches";
import TotalPrice from "./TotalPrice";
import RaceStartlist from "./RaceStartlist";
import styles from "../styles/Dashboard.module.scss";

const Dashboard = (props) => {
	const { confirmedData, data, onInput } = props;
	// an array of all the ticket prices is created so that the contents can be summed with the reduce method
	const ticketPrices = [];
	data.forEach((objTicketPrice) =>
		ticketPrices.push(objTicketPrice.ticketPrice.value)
	);
	const ticketSaleTotal = ticketPrices.reduce((a, b) => a + b, 0);

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>F Horne LDT Task</h1>
			<div className={styles.top}>
				<UserInput data={data} onInput={onInput} />
				<div className={styles.right}>
					<Matches data={data} confirmedData={confirmedData} />
					<TotalPrice ticketSaleTotal={ticketSaleTotal} />
				</div>
			</div>
			<RaceStartlist data={data} />
		</div>
	);
};

export default Dashboard;

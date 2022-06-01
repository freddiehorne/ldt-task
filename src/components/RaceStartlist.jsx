import Name from "./Name";
import TicketPrice from "./TicketPrice";
import { nanoid } from "nanoid";
import Titles from "./Titles";
import styles from "../styles/RaceStartlist.module.scss";

const RaceStartlist = (props) => {
	return (
		<ol>
			{props.data.map((raceStartlist) => {
				const { eventTitle, organiserTitle, ticketPrice } = raceStartlist;
				return (
					<li className={styles.listItem} key={nanoid()}>
						<Name raceStartlist={raceStartlist} />
						<Titles eventTitle={eventTitle} organiserTitle={organiserTitle} />
						<TicketPrice ticketPrice={ticketPrice.value} />
					</li>
				);
			})}
		</ol>
	);
};

export default RaceStartlist;

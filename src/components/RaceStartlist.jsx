import { nanoid } from "nanoid";
import Name from "./Name";
import Titles from "./Titles";
import RaceDate from "./RaceDate";
import TicketPrice from "./TicketPrice";
import styles from "../styles/RaceStartlist.module.scss";

const RaceStartlist = (props) => {
	return (
		<ol>
			{props.data.map((raceStartlist) => {
				const {
					lastName,
					firstName,
					eventTitle,
					organiserTitle,
					raceStartDate,
					ticketPrice,
				} = raceStartlist;
				return (
					<li className={styles.listItem} key={nanoid()}>
						<Name
							name={{
								lastName,
								firstName,
							}}
						/>
						<div className={styles.flexContainer}>
							<Titles eventTitle={eventTitle} organiserTitle={organiserTitle} />
							<RaceDate raceStartDate={raceStartDate} />
						</div>
						<TicketPrice ticketPrice={ticketPrice.value} />
					</li>
				);
			})}
		</ol>
	);
};

export default RaceStartlist;

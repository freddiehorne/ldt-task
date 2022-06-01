import Name from "./Name";
import TicketPrice from "./TicketPrice";
import { nanoid } from "nanoid";

const RaceStartlist = (props) => {
	return (
		<ol>
			{props.data.map((raceStartlist) => {
				const { eventTitle, organiserTitle, ticketPrice } = raceStartlist;
				return (
					<li key={nanoid()}>
						<Name raceStartlist={raceStartlist} />
						<p>{eventTitle}</p>
						<p>{organiserTitle}</p>
						<TicketPrice ticketPrice={ticketPrice.value} />
					</li>
				);
			})}
		</ol>
	);
};

export default RaceStartlist;

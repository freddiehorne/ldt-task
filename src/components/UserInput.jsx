import { nanoid } from "nanoid";
import styles from "../styles/UserInput.module.scss";

const UserInput = (props) => {
	const { data, onInput } = props;
	// an array of all individual organisers is created (in this case there are three) to be used in the dropdown menu
	const organisers = [];
	data.forEach((item) => {
		if (organisers.includes(item.organiserTitle)) return;
		organisers.push(item.organiserTitle);
	});

	return (
		<label className={styles.label}>
			Filter by typing or using the dropdown menu
			<input
				className={styles.input}
				placeholder="e.g Organiser, Event or Surname"
				type="search"
				list="organisers"
				onChange={onInput}
			/>
			<datalist id="organisers">
				{organisers.map((item) => {
					return <option value={item} key={nanoid()} />;
				})}
			</datalist>
		</label>
	);
};

export default UserInput;

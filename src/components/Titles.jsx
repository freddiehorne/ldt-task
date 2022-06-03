import styles from "../styles/Titles.module.scss";

const Titles = (props) => {
	const { eventTitle, organiserTitle } = props;
	return (
		<>
			<p className={styles.organiser}>{organiserTitle}</p>
			<p>{eventTitle}</p>
		</>
	);
};

export default Titles;

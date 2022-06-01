import styles from "../styles/Titles.module.scss";

const Titles = (props) => {
	const { eventTitle, organiserTitle } = props;
	return (
		<>
			<p>{eventTitle}</p>
			<p className={styles.organiser}>{organiserTitle}</p>
		</>
	);
};

export default Titles;

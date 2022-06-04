import styles from "../styles/Name.module.scss";

const Name = (props) => {
	let { lastName, firstName } = props.name;
	lastName = lastName[0].toUpperCase() + lastName.slice(1);
	firstName = firstName[0].toUpperCase() + firstName.slice(1);

	return <p className={styles.name}>{`${lastName}, ${firstName}`}</p>;
};

export default Name;

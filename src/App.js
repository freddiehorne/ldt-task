import { useState } from "react";
import data from "./data.json";
import Dashboard from "./components/Dashboard";

function App() {
	const [userInput, setUserInput] = useState("");
	// sets the state when the user types in the input box
	const onInput = (e) => {
		setUserInput(e.target.value);
	};
	// only data with "CONFIRMED" status is used
	const confirmedData = data.filter((item) => {
		return item.status === "CONFIRMED";
	});
	// data is sorted in order of race start date with the earliest showing first
	confirmedData.sort(
		(a, b) => new Date(a.raceStartDate) - new Date(b.raceStartDate)
	);
	// filters the data when the user types in the input box according with either organiserTitle, eventTitle or lastName and the userInput state
	const filteredData = confirmedData.filter(
		(item) =>
			item.organiserTitle.toLowerCase().includes(userInput.toLowerCase()) ||
			item.eventTitle.toLowerCase().includes(userInput.toLowerCase()) ||
			item.lastName.toLowerCase().includes(userInput.toLowerCase())
	);

	// the data passed into the Dashboard component is either the filtered data or the confirmed data if the filter has not been applied
	return (
		<Dashboard
			data={filteredData.length > 0 ? filteredData : confirmedData}
			onInput={onInput}
			confirmedData={confirmedData}
		/>
	);
}

export default App;

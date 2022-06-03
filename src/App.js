import { useState } from "react";
import data from "./data.json";
import Dashboard from "./components/Dashboard";

function App() {
	const originalData = data;
	const [userInput, setUserInput] = useState("");
	// sets the state when the user types in the input box
	const onInput = (e) => {
		setUserInput(e.target.value);
	};
	// data is sorted in order of race start date with the soonest showing first
	data.sort((a, b) => new Date(a.raceStartDate) - new Date(b.raceStartDate));
	// filters the data when the user types in the input box according to either organiserTitle, eventTitle or lastName and the userInput state
	const filtered = data.filter(
		(item) =>
			item.organiserTitle.toLowerCase().includes(userInput.toLowerCase()) ||
			item.eventTitle.toLowerCase().includes(userInput.toLowerCase()) ||
			item.lastName.toLowerCase().includes(userInput.toLowerCase())
	);
	// the data passed into the Dashboard component is either the filtered data or the original data if the filter has not been applied
	return (
		<Dashboard
			data={filtered.length > 0 ? filtered : data}
			onInput={onInput}
			originalData={originalData}
		/>
	);
}

export default App;

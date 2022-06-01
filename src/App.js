import { useState } from "react";
import data from "./data.json";
import Dashboard from "./components/Dashboard";

function App() {
	const [userInput, setUserInput] = useState("");
	// sets the state when input box is typed in
	const onInput = (e) => {
		setUserInput(e.target.value);
	};
	// filters the data when the user types in the input box according to either orgainiserTitle, eventTitle or lastName and userInput state
	const filtered = data.filter(
		(item) =>
			item.organiserTitle.toLowerCase().includes(userInput.toLowerCase()) ||
			item.eventTitle.toLowerCase().includes(userInput.toLowerCase()) ||
			item.lastName.toLowerCase().includes(userInput.toLowerCase())
	);
	// the data passed into the Dashboard component is either the filtered data or the original data
	return (
		<Dashboard data={filtered.length > 0 ? filtered : data} onInput={onInput} />
	);
}

export default App;

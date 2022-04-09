import React from "react";
import Header from "./header";
import Footer from "./footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
function App() {
	const [notesArray, setNotesArray] = React.useState([]);
	function addNote() {}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			<Note />
			<Footer />
		</div>
	);
}

export default App;

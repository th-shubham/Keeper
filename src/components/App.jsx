import React from "react";
import Header from "./header";
import Footer from "./footer";
import CreateArea from "./CreateArea";
import Note from "./Note";
function App() {
	const [notesArray, setNotesArray] = React.useState([]);
	function addNote(noteToAdd) {
		setNotesArray((prevNotesArray) => {
			return [...prevNotesArray, noteToAdd];
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notesArray.map((noteItem, index) => {
				return <Note title={noteItem.title} content={noteItem.content} />;
			})}
			<Footer />
		</div>
	);
}

export default App;

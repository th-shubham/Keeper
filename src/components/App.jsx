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

	function deleteNote(id) {
		setNotesArray((prevNotesArray) => {
			return prevNotesArray.filter((note, index) => {
				return index !== id;
			});
		});
	}
	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notesArray.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						toDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;

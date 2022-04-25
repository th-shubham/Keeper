import React from "react";
import axios from "axios";

import Header from "./header";
import Footer from "./footer";
import CreateArea from "./CreateArea";
import Note from "./Note";

const api_base = "https://keep-clone-project-shubham.herokuapp.com";
function App() {
	const [notesArray, setNotesArray] = React.useState([]);

	React.useEffect(() => {
		getNotes();
	}, []);

	const getNotes = () => {
		fetch(api_base + "/home")
			.then((res) => res.json())
			.then((data) => setNotesArray(data))
			.catch((err) => console.error("Error: ", err));
		console.log(notesArray);
	};

	const addNote = async (noteToAdd) => {
		const data = await fetch(api_base + "/home", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title: noteToAdd.title,
				content: noteToAdd.content,
			}),
		}).then((res) => res.json());

		setNotesArray([...notesArray, data]);
	};

	async function deleteNote(id) {
		const data = await fetch(api_base + "/home/delete/" + id, {
			method: "DELETE",
		}).then((res) => res.json());
		setNotesArray((prevNotesArray) => {
			return prevNotesArray.filter((note) => {
				return note._id !== id;
			});
		});
		// setNotesArray((setNotesArray) =>
		// 	setNotesArray.filter((note) => note._id !== data.result._id)
		// );
		// getNotes();
	}

	return (
		<div>
			<Header />
			<div
				id="g_id_onload"
				data-client_id="293324348039-68mar5qk91c7t3njo98k5mimnbldtn2g.apps.googleusercontent.com"
				data-context="signin"
				data-ux_mode="popup"
				data-login_uri="https://keep-clone-project-shubham.herokuapp.com"
				data-nonce=""
				data-auto_select="true"
			></div>

			<div
				class="g_id_signin"
				data-type="standard"
				data-shape="rectangular"
				data-theme="filled_blue"
				data-text="continue_with"
				data-size="medium"
				data-locale="en-US"
				data-logo_alignment="left"
			></div>
			<CreateArea onAdd={addNote} />
			{notesArray.map((noteItem, index) => {
				return (
					<Note
						key={noteItem._id}
						_id={noteItem._id}
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

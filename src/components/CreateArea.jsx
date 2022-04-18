import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
	const [isExpanded, setIsExpended] = useState(false);
	const [note, setNote] = useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	}

	function handleSubmit(event) {
		if (note.title !== "" || note.content !== "") {
			props.onAdd(
				note
			); /* passing note as parameter to addNote function which is added as Attribute in CreateArea tag in App.jx*/
			setNote({
				title: "",
				content: "",
			}); /*Empty the Inputs on Submit */
		}
		/*If note if fully empty then focus to Title input again */

		event.preventDefault(); /*prevent form from refreshing(defaultBehavior) */
	}
	return (
		<div>
			<form>
				{isExpanded && (
					<input
						name="title"
						autoFocus="true"
						onKeyDown={(event) => {
							if (event.code === "Enter" && event.ctrlKey) handleSubmit(event);
							if (event.code === "Enter") {
								const form = event.target.form;
								const index = [...form].indexOf(event.target);
								form.elements[index + 1].focus();
								event.preventDefault();
							}
						}}
						onChange={handleChange}
						value={note.title}
						placeholder="Title"
					/>
				)}
				<textarea
					onFocus={() => {
						setIsExpended(true);
					}}
					onKeyDown={(event) => {
						if (event.code === "Enter" && event.ctrlKey) handleSubmit(event);
					}}
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={isExpanded ? "3" : "1"}
				/>
				<button onClick={handleSubmit}>
					<AddIcon />
				</button>
			</form>
		</div>
	);
}

export default CreateArea;

import React from "react";

function CreateArea(props) {
	const [note, setNote] = React.useState({
		title: "",
		content: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prevNote) => {
			return { ...prevNote, [name]: value };
		});
	}
	return (
		<div>
			<form>
				<input
					name="title"
					onChange={handleChange}
					value={note.title}
					placeholder="Title"
				/>
				<textarea
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows="3"
				/>
				<button
					onClick={(event) => {
						props.onAdd(
							note
						); /* passing note as parameter to addNote function which is added as Attribute in CreateArea tag in App.jx*/
						setNote({
							title: "",
							content: "",
						}); /*Empty the Inputs on Submit */
						event.preventDefault(); /*prevent form from refreshing(defaultBehavior) */
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;

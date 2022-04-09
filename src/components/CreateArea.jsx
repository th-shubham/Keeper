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

	function handleSubmit(event) {
		props.onAdd(
			note
		); /* passing note as parameter to addNote function which is added as Attribute in CreateArea tag in App.jx*/
		setNote({
			title: "",
			content: "",
		}); /*Empty the Inputs on Submit */
		event.preventDefault(); /*prevent form from refreshing(defaultBehavior) */
	}
	return (
		<div>
			<form>
				<input
					name="title"
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
				<textarea
					onKeyDown={(event) => {
						if (event.code === "Enter" && event.ctrlKey) handleSubmit(event);
					}}
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows="3"
				/>
				<button onClick={handleSubmit}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;

import React from "react";
import Header from "./header";
import Footer from "./footer";
import notes from "./Notes";
import Note from "./Note";
function App() {
	return (
		<div>
			<Header />
			{notes.map((noteitem) => (
				<Note
					key={noteitem.key}
					title={noteitem.title}
					content={noteitem.content}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;

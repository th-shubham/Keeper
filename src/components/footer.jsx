import React from "react";

const d = new Date();
let year = d.getFullYear();

function Footer() {
	return (
		<footer>
			<p>Copyrights © {year}</p>
		</footer>
	);
}

export default Footer;

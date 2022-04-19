const express = require("express");
const router = require("express").Router();
let Note = require("../models/note.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

router.get("/home", async (req, res) => {
	const notes = await Note.find();
	res.json(notes);
});

router.post("/home", (req, res) => {
	const newTitle = req.body.title;
	const newContent = req.body.content;
	const newNote = new Note({
		title: newTitle,
		content: newContent,
	});
	newNote.save();
	res.json(newNote);
});

router.delete("/home/delete/:id", async (req, res) => {
	const result = await Note.deleteOne({ _id: req.params.id });

	res.json({ result });
});

module.exports = router;

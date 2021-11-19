const note = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the feedback
note.get('/', (req, res) => {
  console.info(`${req.method} request received for note`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting feedback
note.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit note`);
  console.log(req.body);

  // Destructuring assignment for the items in req.body
  const { noteTitle, noteText } = req.body;

  // If all the required properties are present
  if (noteTitle && noteText) {
    // Variable for the object we will save
    const newNote = {
      title: noteTitle,
      text: noteText,
      id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };
    console.log(response)

    res.json(response);
  } else {
    res.json('Error in saving note');
  }
});

module.exports = note;
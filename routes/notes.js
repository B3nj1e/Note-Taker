const note = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

// GET Route for retrieving all the notes
note.get('/', (req, res) => {
  console.info(`${req.method} request received for note`);

  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for saving note
note.post('/', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit note`);

  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // define key:value pairs for the object to be saved
    const newNote = {
      title: title,
      text: text,
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


// const { noteId } = handleNoteDelete(e);
// let id = noteId;

note.delete('/?', id, (res, req) => {

    console.info(`${req.method} request received for note`);

    const { noteId } = req.body;
    if (noteId == id) {
    readFromFile('./db/db.json').then((data) => res(console.log(JSON.parse(data))));
    }

})

module.exports = note;
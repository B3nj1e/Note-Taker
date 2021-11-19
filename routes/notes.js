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


note.delete('/:id', (req, res) => {
    //selcting id from request object
    let noteId = req.params.id;
    
    // reading the database file
    readFromFile('./db/db.json').then((data) => JSON.parse(data))
    .then((json) => {
        // once the data is a string filter the notes for the id that was object from the request object
      const removeNote = json.filter((note) => note.id !== noteId);
      // if the note id in the database does not match the request object id then write into the database file
      writeToFile('./db/db.json', removeNote); 

      res.json(`Note ID:${noteId} has been deleted!`);
    });
});

module.exports = note;
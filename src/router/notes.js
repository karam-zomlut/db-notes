const express = require('express');
const { getNotesController, createNoteController } = require('../controller');

const notesRouter = express.Router();

notesRouter.get('/', getNotesController);
notesRouter.post('/', createNoteController);

module.exports = notesRouter;
import express from 'express';
const router = express.Router();

import { createNote, deleteNote, getAllNotes } from '../controllers/notes.js';

router.route('/').post(createNote).get(getAllNotes);
// place before :id
router.route('/:id').delete(deleteNote);

export default router;

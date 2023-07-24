import Note from '../models/Note.js';
import { StatusCodes } from 'http-status-codes';

const createJob = async (req, res) => {
  const { id, value } = req.body;

  const note = await Note.create(req.body);
  res.status(StatusCodes.CREATED).json({ note });
};

const createNote = async (req, res) => {
  // const note = req.body;
  res.send('delete job');
};
const deleteNote = async (req, res) => {
  res.send('delete job');
};
const getAllNotes = async (req, res) => {
  res.send('get all job');
};

const checkNotes = async (req, res) => {
  res.send('show stats');
};

export { createNote, deleteNote, getAllNotes };

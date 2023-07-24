import mongoose, { Schema } from 'mongoose';

const NoteSchema = new mongoose.Schema({
  id: { type: Schema.Types.ObjectId },
  value: { type: String, required: true },
  user: { type: String, required: true },
});

export default mongoose.model('Note', NoteSchema);

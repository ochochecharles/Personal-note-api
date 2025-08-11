import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Note', noteSchema); //creates a Note collection in MongoDB. 

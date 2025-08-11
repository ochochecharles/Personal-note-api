import Note from '../models/notes.js'

// get all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
};

// GET single note
export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
};

// POST create new note
export const createNote = async (req, res) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: 'Title and body are required' });
    }

    const newNote = new Note({ title, body });
    const savedNote = await newNote.save();

    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error: error.message });
  }
};

// PUT update note
export const updateNote = async (req, res) => {
  try {
    const { title, body } = req.body;

    // Find note by ID and update
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true, runValidators: true } // new=true => return updated doc
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message });
  }
};

// DELETE note
export const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
};





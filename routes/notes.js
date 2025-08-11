import { Router } from 'express';
import { getAllNotes, getSingleNote, createNote, updateNote, deleteNote } from '../controllers/notesController.js';

const router = Router();

router.get('/', getAllNotes); // maps GET /notes to the controller
router.get('/:id', getSingleNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;

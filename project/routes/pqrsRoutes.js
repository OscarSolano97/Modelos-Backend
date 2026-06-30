import express from 'express';
import {
  createPqrs,
  getAllPqrs,
  getPqrsById,
  updatePqrs,
  deletePqrs,
} from '../controllers/pqrsController.js';

const router = express.Router();

router.get('/', getAllPqrs);
router.get('/:id', getPqrsById);
router.post('/', createPqrs);
router.put('/:id', updatePqrs);
router.delete('/:id', deletePqrs);

export default router;

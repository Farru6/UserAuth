const router = express.Router();
import express from 'express';
import { createUserHandler, deleteUserHandler, getAllUsersHandler, getUserByIdHandler, updateUserHandler } from '../controllers/user.js';

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getUserByIdHandler);
router.put('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);

export default router;
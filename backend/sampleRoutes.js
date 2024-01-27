import express from 'express';
import { SignUpUser } from '../controller/UserController.js';

const router = express.Router();

router.post('/signup', SignUpUser);

export default router; 

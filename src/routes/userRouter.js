import express, { Router } from 'express';
import getUser from '../controllers/user/getUser.js';
import postUser from '../controllers/user/insertUser.js';
import putUser from '../controllers/user/updateUser.js';
import deleteUser from '../controllers/user/deleteUser.js';
import listUsers from '../controllers/user/listUsers.js'
const router = express.Router();

router.get('/', getUser)

router.get('/list', listUsers)

router.post('/', postUser)

router.put('/', putUser)

router.delete('/', deleteUser)

export default router
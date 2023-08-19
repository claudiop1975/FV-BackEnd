import { Router } from 'express';
import {getAll,getByRole,getByID,newUser,updateUser} from '../controllers/user.controller.js';

const router = Router()


router.get('/', getAll)
.get('/id', getByID)
.get('/role', getByRole)
.post('/', newUser)
.put('/', updateUser)




export default router
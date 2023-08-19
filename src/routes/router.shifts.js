import { Router } from 'express';
import {getAll,getByID,newShift} from '../controllers/shift.controller.js';

const router = Router()


router.get('/', getAll)
.get('/id', getByID)

.post('/', newShift)





export default router
import { Router } from 'express';
import { getAllSells,newSell } from '../controllers/sells.controller.js';
const router = Router()

router.get('/', getAllSells)

    .post('/', newSell)
  

export default router
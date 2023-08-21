import { Router } from 'express';
import { newCashboxMove,getAllMoves,getMovementsByCashboxID } from '../controllers/cashboxMoves.controller.js';
const router = Router()

router.get('/', getAllMoves)
    .get('/id', getMovementsByCashboxID)
  
    .post('/', newCashboxMove)
  

export default router
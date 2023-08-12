import { Router } from 'express';
import { getAll, newProducType } from '../controllers/productType.controller.js';
const router = Router()

router.get('/', getAll)
router.post('/', newProducType)

export default router
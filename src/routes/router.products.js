import { Router } from 'express';
import { getAll, newProd } from '../controllers/product.controller.js';
const router = Router()

router.get('/', getAll)
router.post('/', newProd)

export default router
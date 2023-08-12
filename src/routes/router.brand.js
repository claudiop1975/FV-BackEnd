import { Router } from 'express';
import { getAll, newBrand } from '../controllers/brand.controller.js';
const router = Router()

router.get('/', getAll)
router.post('/', newBrand)

export default router
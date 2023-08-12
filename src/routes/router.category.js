import { Router } from 'express';
import { getAll, newCategory } from '../controllers/category.controller.js';
const router = Router()

router.get('/', getAll)
router.post('/', newCategory)

export default router
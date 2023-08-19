import { Router } from 'express';
import { getAll, newProd, updateProd, updateProdStock } from '../controllers/product.controller.js';
const router = Router()

router.get('/', getAll)
.post('/', newProd)
.put('/', updateProd)
.put('/sell', updateProdStock)


export default router
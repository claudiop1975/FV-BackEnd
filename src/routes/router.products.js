import { Router } from 'express';
import { getAllProducts, getAllProductsByBrand, getProductById, getAllProductsByPType, getAllProductsByHeading, newProd, updateProd, updateProdStock } from '../controllers/product.controller.js';
const router = Router()

router.get('/', getAllProducts)
    .get('/id', getProductById)
    .get('/brand', getAllProductsByBrand)
    .get('/heading', getAllProductsByHeading)
    .get('/ptype', getAllProductsByPType)
    .post('/', newProd)
    .put('/', updateProd)
    .put('/sell', updateProdStock)


export default router
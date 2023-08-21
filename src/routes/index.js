import { Router } from 'express';
import routerProducts from "./router.products.js";
import routerCategory from './router.category.js';
import routerBrand from './router.brand.js';
import routerProductType from './router.productType.js';
import routerUsers from './router.users.js';
import routerShifts from './router.shifts.js';
import routerCashboxMoves from './router.cashboxMoves.js';
import routerSells from './router.sells.js'
const router = Router();

router.use("/products", routerProducts)
    .use("/category", routerCategory)
    .use("/brand", routerBrand)
    .use("/ptype", routerProductType)
    .use("/users", routerUsers)
    .use("/shifts", routerShifts)
    .use("/moves", routerCashboxMoves)
    .use("/sells", routerSells)
export default router
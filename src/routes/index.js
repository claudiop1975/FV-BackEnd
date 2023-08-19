import { Router } from 'express';
import routerProducts from "./router.products.js";
import routerCategory from './router.category.js';
import routerBrand from './router.brand.js';
import routerProductType from './router.productType.js';
import routerUsers from './router.users.js';
import routerShifts from './router.shifts.js';

const router = Router();

router.use("/products", routerProducts)
    .use("/category", routerCategory)
    .use("/brand", routerBrand)
    .use("/ptype", routerProductType)
    .use("/users", routerUsers)
    .use("/shifts", routerShifts)

export default router
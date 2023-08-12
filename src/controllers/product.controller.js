import { Product } from "../models/Product.js";


export async function getAll(req, res) {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function newProd(req, res) {
    try {
        const { product_name, product_presentation, product_price, brand_id, category_id, product_type_id } = req.body
        let newProduct = await Product.create({ product_name, product_presentation, product_price:parseFloat(product_price),brand_id:parseInt(brand_id), category_id:parseInt(category_id), product_type_id:parseInt(product_type_id) })
    /*     newProduct.addType(product_type_id)
        newProduct.addBrand(brand_id)
        newProduct.addCategory(category_id) */
        res.send(newProduct)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
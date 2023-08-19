import { Product } from "../models/Product.js";


export function getAll(req, res){
    const { product_active,brand_id,product_type_id, heading_id } = req.query
    if(brand_id)getAllProductsByBrand
    else if(product_type_id)getAllProductsByPType
    else if(heading_id)getAllProductsByHeading
    else getAllProductsByHeading
}

export async function getAllProducts(req, res) {
    const { product_active } = req.query
    try {
        const products = await Product.findAll({ where: { product_active } })
        res.json(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function getAllProductsByBrand(req, res) {
    const { brand_id, product_active } = req.query
    try {
        const products = await Product.findAll({ where: { brand_id, product_active } })
        res.json(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function getAllProductsByPType(req, res) {
    const { product_type_id, product_active } = req.query
    try {
        const products = await Product.findAll({ where: { product_type_id, product_active } })
        res.json(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


export async function getAllProductsByHeading(req, res) {
    const { heading_id, product_active } = req.query
    try {
        const products = await Product.findAll({ where: { heading_id, product_active } })
        res.json(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


export async function newProd(req, res) {
    try {
        const { product_name, product_presentation, product_price, brand_id, category_id, product_type_id, product_stock } = req.body
        let newProduct = await Product.create({
            product_name,
            product_presentation,
            product_price,
            brand_id,
            category_id,
            product_type_id,
            product_stock,
            product_active
        })

        res.send(newProduct)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function updateProd(req, res) {
    try {
        const { product_id, product_name, product_presentation, product_price, brand_id, category_id, product_type_id, product_stock } = req.body
        let updatedProduct = await Product.update({
            product_name,
            product_presentation,
            product_price,
            brand_id,
            category_id,
            product_type_id,
            product_stock,
            product_active
        },
            {
                where: { product_id },
            }
        )
        res.send(updatedProduct)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function updateProdStock(req, res) {
    try {
        const { product_id, decrement } = req.body
        let updatedProduct = await Product.increment({
            product_stock: -decrement
        },
            {
                where: { product_id },
            }
        )
        res.send(updatedProduct)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
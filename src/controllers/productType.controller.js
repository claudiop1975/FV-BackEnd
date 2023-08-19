import { ProductType } from "../models/PType.js"


export async function getAll(req, res) {
    try {
        const productTypes = await ProductType.findAll()
        res.json(productTypes)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function getByID(req, res) {
    const { product_type_id } = req.body
    try {
        const productType = await ProductType.findByPk(product_type_id)
        res.json(productType)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function newProducType(req, res) {
    try {
        const { product_type_name } = req.body
        let newProducType = await ProductType.create({product_type_name})

        res.send(newProducType)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
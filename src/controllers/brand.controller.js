import { Brand } from "../models/Brand.js"


export async function getAll(req, res) {
    try {
        const brands = await Brand.findAll()
        res.json(brands)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export async function getByID(req, res) {
    const { brand_id } = req.body
    try {
        const brand = await Brand.findByPk(brand_id)
        res.json(brand)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function newBrand(req, res) {
    try {
        const { brand_name } = req.body
        let newBrand = await Brand.create({brand_name})

        res.send(newBrand)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
import { Category } from "../models/Category.js"


export async function getAll(req, res) {
    try {
        const categories = await Category.findAll()
        res.json(categories)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function newCategory(req, res) {
    try {
        const { category_name } = req.body
        let newCategory = await Category.create({category_name})
        res.send(newCategory)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
import { Heading } from "../models/Heading.js"


export async function getAll(req, res) {
    try {
        const headings = await Heading.findAll()
        res.json(headings)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function getByID(req, res) {
    const { heading_id } = req.body
    try {
        const heading = await Heading.findByPk(heading_id)
        res.json(heading)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


export async function newHeading(req, res) {
    try {
        const { heading_name } = req.body
        let newHeading = await Heading.create({heading_name})
        res.send(newHeading)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
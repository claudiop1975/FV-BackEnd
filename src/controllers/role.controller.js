import { Role } from "../models/Role.js"


export async function getAll(req, res) {
    try {
        const roles = await Role.findAll()
        res.json(roles)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export async function getByID(req, res) {
    const { role_id } = req.body
    try {
        const role = await Role.findByPk(role_id)
        res.json(role)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function newRole(req, res) {
    try {
        const { role_name } = req.body
        let newRole = await Role.create({role_name})

        res.send(newRole)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
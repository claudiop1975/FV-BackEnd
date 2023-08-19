import { Shift } from "../models/Shift.js"


export async function getAll(req, res) {
    try {
        const shifts = await Shift.findAll()
        res.json(shifts)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export async function getByID(req, res) {
    const { shift_id } = req.body
    try {
        const shift = await Shift.findByPk(shift_id)
        const users = await shift.getUsers()
        res.json({shift,users})
    } catch (error) {
        res.status(400).send(error.message)
    }
}



export async function newShift(req, res) {
    try {
        const { shift_name,shift_start,shift_end } = req.body
        let newShift = await Shift.create({shift_name,shift_start,shift_end })

        res.send(newShift)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
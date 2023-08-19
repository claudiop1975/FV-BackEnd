import { Cashbox } from "../models/Cashbox.js"




export async function getAllCashboxes(req, res) {
    try {
        const cashboxes = await Cashbox.findAll()
        res.json(cashboxes)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function getCashboxByID(req, res) {
    try {
        const { cashbox_id } = req.body
        const cashbox = await Cashbox.findByPk(cashbox_id)
        res.json(cashbox)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export async function getCashboxByShiftid(req, res) {
    try {
        const { shift_id } = req.body
        const cashbox = await Cashbox.findOne({where: {shift_id}})
        res.json(cashbox)
    } catch (error) {
        res.status(400).send(error.message)
    }
}





export async function newCashbox(req, res) {
    try {
        const { shift_id } = req.body
        let newCashbox = await Cashbox.create({shift_id})

        res.send(newCashbox)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
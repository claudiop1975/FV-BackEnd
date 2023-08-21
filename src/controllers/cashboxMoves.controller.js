
import { CashboxMoves } from "../models/CashboxMoves.js"



export async function getAllMoves(req, res) {
    try {
        const cashboxMoves = await CashboxMoves.findAll()
        res.json(cashboxMoves)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function getMovementsByCashboxID(req, res) {
    try {
        const { cashbox_id } = req.body
        const cashboxMoves = await CashboxMoves.findAll({where: { cashbox_id}})
        res.json(cashboxMoves)
    } catch (error) {
        res.status(400).send(error.message)
    }
}



export async function newCashboxMove(req, res) {
    try {
        const { cashbox_id,cashbox_moves_income,cashbox_moves_description,cashbox_moves_outcome } = req.body
        let newCashboxMove = await CashboxMoves.create({cashbox_id,cashbox_moves_income,cashbox_moves_outcome,cashbox_moves_description})

        res.send(newCashboxMove)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


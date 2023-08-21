
import { Sells } from "../models/Sells.js"



export async function getAllSells(req, res) {
    try {
        const sells = await Sells.findAll({include: ["products", "combos"]})
        res.json(sells)
    } catch (error) {
        res.status(400).send(error.message)
    }
}



export async function newSell(req, res) {
    try {
        const { cashbox_moves_id,products,combos } = req.body
     
        let newSell = await Sells.create({cashbox_moves_id})
        products.forEach(async productProductId => await newSell.addProduct(productProductId))
        combos.forEach(async comboComboId => await newSell.addCombo(comboComboId))
        res.send(newSell)
    } catch (error) {
        res.status(400).send(error.message)
    }
}


import { User } from "../models/User.js"

export async function getAll(req, res) {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export async function getByID(req, res) {
    const { user_id } = req.body
    try {
        const user = await User.findByPk(user_id)
        const shifts = await user.getShifts()
        const roles = await user.getRole()
        res.json({user, shifts,roles})
    } catch (error) {
        res.status(400).send(error.message)
    }
}



export async function getByRole(req, res) {
    const { role_id } = req.body
    try {
        const user = await User.findAll({where:{ role_id}})
        res.json(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}
export async function newUser(req, res) {
    try {
        const { user_name,user_password,user_phone,role_id,shifts } = req.body
        let newUser = await User.create({user_name,user_password,user_phone,role_id})
        await newUser.addShifts(shifts)
        res.send(newUser)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export async function updateUser(req, res) {
    try {
        const {user_id, user_name,user_password,user_phone,role_id,shifts } = req.body
        let user = await User.findByPk(user_id)
        if (user) {
         await User.update({user_name,user_password,user_phone,role_id},
            {
                where: { user_id },
            })
       await user.setShifts(shifts)
        res.send(user)}
    } catch (error) {
        res.status(400).send(error.message)
    }
}
const { Users } = require('../models')
const bcrypt = require('bcrypt')
const { nanoid } = require('nanoid')
const jwt = require('jsonwebtoken')

async function register(username, password) {
    const encryptedPassword = await bcrypt.hash(password, 5)
    const id = nanoid()
    const payload = {
        id,
        username,
    }
    await Users.create({
        ...payload,
        password: encryptedPassword
    })
    payload.token = jwt.sign({ id }, process.env.JWT_SECRET)
    return payload
}

async function login(username, password) {
    const user = await Users.findOne({
        where: { username }
    })
    if (await bcrypt.compare(password, user.password)) {
        const payload = {
            id: user.id,
            username: user.username,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        }
        return payload
    } else {
        return "wrong password"
    }
}

module.exports = {
    register,
    login
}
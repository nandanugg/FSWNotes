const express = require('express')
const { get, add, edit, remove } = require('../controller/articleController')
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const app = express.Router()

app.get('/', async (req, res) => {
    const { query } = req
    res.send(await get({
        userId: req.user.id,
        ...query
    }))
})

app.post('/', async (req, res) => {
    const { body } = req
    res.send(await add({
        userId: req.user.id,
        ...body
    }))
})

app.put('/:id', async (req, res) => {
    const { body, params } = req
    await edit(params.id, body)
    res.send('ok')
})

app.delete('/:id', async (req, res) => {
    const { params } = req
    await remove(params.id)
    res.send('ok')
})

module.exports = app
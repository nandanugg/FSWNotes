const express = require('express')
const ArticleController = require('../controller/articleController')
const article = new ArticleController()
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })
const app = express.Router()

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await article.get({
        userId: req.user.id,
        ...query
    }))
})

app.post('/', restrict, async (req, res) => {
    const { body } = req
    res.send(await article.add({
        userId: req.user.id,
        ...body
    }))
})

app.put('/:id', restrict, async (req, res) => {
    const { body, params } = req
    await article.edit(params.id, body)
    res.send('ok')
})

app.delete('/:id', restrict, async (req, res) => {
    const { params } = req
    await article.remove(params.id)
    res.send('ok')
})

module.exports = app
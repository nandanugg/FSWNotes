const { Articles } = require('../models')
const { nanoid } = require('nanoid')
const app = require('../routes/authRoute')

function get(query) {
    return Articles.findAll({
        where: query
    })
}

function add(data) {
    return Articles.create({
        id: nanoid(),
        ...data
    })
}

function edit(id, data) {
    return Articles.update(data, {
        where: { id }
    })
}

function remove(query) {
    return Articles.destroy({
        where: { id }
    })
}

module.exports = {
    get,
    add,
    edit,
    remove
}
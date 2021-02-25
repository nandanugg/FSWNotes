const { Users } = require('./models')

Users.findAll({
    where: {
        id: 1
    }
}).then((result) => {
    console.log('findAll', result);
})

Users.findOne({
    where: {
        id: 1
    }
}).then((result) => {
    console.log('findOne', result);
})
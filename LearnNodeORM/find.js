const { Users } = require('./models')

Users.findAll({
    where: {
        id: 1
    }
}
).then((result) => {
    console.log('findall: 'result);
})

Users.findOne({
    where: {
        id: 1
    }
}
).then((result) => {
    console.log('findOne', result); //object
})
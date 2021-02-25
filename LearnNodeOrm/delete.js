const { Users } = require('./models')

Users.destroy({
    where: {
        id: 1
    }
}).then((result) => {
    console.log(result);
})
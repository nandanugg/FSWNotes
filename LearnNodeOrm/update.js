const { Users } = require('./models')

Users.update({
    username: "nanda luwak",
}, {
    where: {
        id: 1
    }
}).then((result) => {
    console.log(result);
})
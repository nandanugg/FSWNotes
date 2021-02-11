const { Users } = require('./models')

Users.update({
    username: "Giov",
    password: "luwak white coffee"
}, {
    where: {
        id: 1
    }
}
).then((result) => {
    console.log(result);
})
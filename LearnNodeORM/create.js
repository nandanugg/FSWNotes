const { Users } = require('./models')

Users.create({
    username: "Giov",
    password: "luwak white coffee"
}).then((result) => {
    console.log(result);
})
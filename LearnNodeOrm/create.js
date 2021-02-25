const { Users } = require('./models')

Users.create({
    username: "nanda",
    password: "luwak wait cofi"
}).then((result) => {
    console.log(result);
})
# Nama Developer: Abi
# Kelas: FSW Pagi
## 16, 17, 18 Februari 2021
# Learn Auth
## 1. Authentication
Authentication adalah validasi proses untuk memverifikasi pemilik dari user tersebut adalah benar. Biasanya perannya digunakan pada proses login username dan password.<br><br>
Kita bisa mengimplentasikan Authentication sesuai dengan design pattern yang kita inginkan, untuk setup nya selengkapnya bisa dilihat [disini](https://github.com/nandanugg/NoteAPIWithSequelize/tree/authentication-feature)<br><br>
Sebagai pengamannya kita dibantu dengan menggunakan Token based dari JSONWebToken `JWT` dan `bcrypt` sebagai encrypted password.<br><br>
Install JWT, bcrypt
```
npm install jsonwebtoken bcrypt
```
Implentasi pada Register user
```js
async function register(username, password) {
    const encryptedPassword = await bcrypt.hash(password, 5)
    const id = nanoid()

    const payload = {
        id,
        username
    }

    await Users.create({
        ...payload, // copy property from object
        password: encryptedPassword
    })

    payload.token = jwt.sign({ id }, process.env.JWT_SECRET)
    return payload
}
```
Implementasi pada Login user
```js
async function login(username, password) {
    const user = await Users.findOne({
        where: { username }
    })
    if (await bcrypt.compare(password, user.password)) {
        const payload = {
            id: user.id,
            username: user.username,
            token: jwt.sign({ id: user.id }, process.env.JWT_SECRET)
        }
        return payload
    } else {
        return "wrong password"
    }
}
```
Implementasi Register dan Login pada Route
```js
app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const result = await register(username, password)
    res.send(result)
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    const result = await login(username, password)
    res.send(result)
})
```
## 2. Authorization
Authorization adalah step setelah Authentication, jadi perannya adalah untuk memverifikasi apakah user memiliki hak akses untuk mengakses data.<br><br>
Kita bisa mengimplentasikan Authorization sesuai dengan design pattern yang kita inginkan, untuk setup nya selengkapnya bisa dilihat [disini](https://github.com/nandanugg/NoteAPIWithSequelize/tree/authentication-feature)<br><br>
Sebagai pengamannya kita menggunakan bearer token yang dibantu `passport` dan `passport-jwt`.<br><br>
Install passport, passport-jwt
```
npm install passport passport-jwt
```
Implementasi pada Middleware
```js
passport.use(
    new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }, (payload, done) => {
        Users.findByPk(payload.id)
            .then(user => done(null, user))
            .catch(user => done(err, false))
    })
)
```
Implementasi Restriction pada Route, contohnya pada get item
```js
const passport = require('../middleware/passportMiddleware')
const restrict = passport.authenticate('jwt', { session: false })

app.get('/', restrict, async (req, res) => {
    const { query } = req
    res.send(await get({
        userId: req.user.id,
        ...query
    }))
})
```
## 3. OOP Implementation
Object Oriented Programming, memudahkan kita untuk meringkas code kita supaya mudah dibaca dan lebih efisien. Penggunaannya menggunakan konsep inheritence, yaitu mewarisi property dari class sebelumnya.<br><br>
Kita bisa mengimplementasikan OOP pada Authentication dan Authorization yang sudah kita buat pada design pattern MCR sebelumnya. Untuk setup nya selengkapnya bisa dilihat [disini](https://github.com/nandanugg/NoteAPIWithSequelize/tree/oop-feature)<br><br>
Implementasi initiate file OOP
```js
class BaseController {
    constructor(model) {
        this.model = model
    }

    get(query) {
        return this.model.findAll({
            where: query
        })
    }

    add(data) {
        return this.model.create({
            id: nanoid(),
            ...data
        })
    }

    edit(id, data) {
        return this.model.update(
            data, {
            where: { id }
        })
    }

    remove(id) {
        return this.model.destroy({
            where: { id }
        })
    }
}
```
Implementasi OOP dengan konsep inheritence
```js
class ArticleController extends BaseController {
    constructor() {
        super(Articles)
    }
}
```

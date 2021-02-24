// # Learn object destructuring in javascript

const user = {
    name: "dwiky",
    age: "21"
}

// agar kita bisa mengakses nilai dari properti
// objek tersebut kita bisa menggunakan

// 1. cara classic
const nameClassic = user.name
console.log(nameClassic);

// 2. cara terbaru
const { name } = user
console.log(name);
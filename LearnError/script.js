const biodata = {
    name = "Faisal", //syntax error
    age: 21,
    address: "Purwakarta",
} //syntax error jika kurungnya dihapus
function sum(a, b) {
    return a + b;
}
setTimeout(null, 100); //type error

const pet = dataDariInternet //reference error belum terdefinisikan
console.log(pet);

function getName(userObj) {
    const result = userObj
    console.log(result.name); //kita pakai parameter seperti sebuah object
}
getName() //type error
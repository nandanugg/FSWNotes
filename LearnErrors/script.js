let user = [
    name : "yanuar", // syntax eror, salah tulis, lihat titik 2 harusnya samadengan
    age = "22",
    address = "Solo"
]

function sum(a, b) {
    return a + b
}

const pet = dataDariInternet // Reference Error
console.log(pet);
// data dari internet tidak pasti tersedia karena bisa juga masalah koneksi

setTimeout(null, 100) // Type Error
// salah masukkan variabel dengan type data yg salah
// harusnya minta function tapi dikasi string
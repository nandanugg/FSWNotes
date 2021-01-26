// file Learn arrow 
const user = {
    name= "Siski", // SyntaxError
    Age: 21,
    Address: "Medan"

}
/**
 * SyntaxError biasanya terjadi karena error salah tulis 
 */
function sum(x, y) {
    return x + y
}
const pet = dataDariInternet // Refrenceerror
console.log(pet);
/**
 * RefrenceError biasanya kalo kita pengen pakai 
 * fungsi / variabel tapi kita salah tulis namanya 
 * Kedepan, refrence erroe juga bakal sering 
 * terjadi jika kita berhubungan dengan data dari internet, 
 * karena data dari internet kadang ada 
 * kadang juga dengga tergantung kondisi inteenet
 */
console.log(8, 9);
setTimeout(null, 100); // TypeEror
/**
 * TypeError biasanya muncul ketika salah masukin
 * variable dengan tipe data yang salah, seperti
 * fungsinya minta variabel fuction masukkin nya malah string, dsb
 */
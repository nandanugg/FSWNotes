let a = 10; //definisi variable
const z = 10; //definisi variable

// arrow function
let arrowFunction = () => {
    return "this is an arrow function";
}
console.log('arrowFunction():', arrowFunction());

//Default parameter
function getName(firstName, lastName, prefix = "Mr.") {
    return `${prefix} ${firstName} ${lastName}`
}

console.log(getName("Giov", "Mahen"));

// .find() & .findIndex() methods
const numbers = [4, 9, 16, 25, 29];
function myFunction(value) {
    return value > 18;
}

// .find() method
const findResult = numbers.find((value) => {
    return value > 8;
})
console.log(findResult);

const findIndexResult = numbers.findIndex(myFunction);
console.log(findIndexResult);

var minInteger = Number.MIN_SAFE_INTEGER //melihat angka integer terkecil yang bisa digunakan
console.log(minInteger);
var maxInteger = Number.MAX_SAFE_INTEGER //melihat angka integer terbesar yang bisa digunakan
console.log(maxInteger);

console.log(Number.isInteger(10)); //cek integer atau bukan
console.log(Number.isInteger(10.5));
console.log(typeof 10.5); //cek tipe data

let number = 5
let stringNumber = "nama"
stringNumber = Number(stringNumber)
console.log(stringNumber);

if (isNaN(stringNumber)) {
    console.log('number bungg');
}

let infinity = 10 / 0
console.log(infinity); //data type infinity

if (isFinite(infinity)) {
    console.log('ini infinity');
}
let a = 10;
const z = 10;

//arrow function
let arrowFunction = () => {
    return "this is an arrow function"
}
console.log('arrowFunction():', arrowFunction());

//Default parameter values
// function getName(firstName = "foo") {
//     return firstName
// }
// console.log(getName()); //foo

//digunakan untuk prefix name Mr Mrs
function getName(firstName, lastName, prefix = "Mr. ") { //prefix = Mr. itu adalah default parameter
    return `${prefix} ${firstName} ${lastName}`
}
console.log(getName("Faisal", "Juliandra", "Mr. "));

//.find() & .findIndex() methods
const numbers = [4, 9, 16, 25, 29];
function myFunction(value) {
    return value > 18
}
//find() method
const findResult = numbers.find((value) => {
    return value > 8
});
console.log(findResult);

//findIndex() method
const findIndexResult = numbers.findIndex(myFunction);
console.log(findIndexResult);

//minimum & maximum number
var minInteger = Number.MIN_SAFE_INTEGER;
console.log(minInteger);

var maxInteger = Number.MAX_SAFE_INTEGER
console.log(maxInteger);

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(typeof 10.5);

let number = 5
let stringNumber = "nama"
stringNumber = Number(stringNumber)
console.log(stringNumber);

if (isNaN(stringNumber)) {
    console.log('masukkan karakter aritmatik');
}

let infinity = 10 / 0
console.log(infinity);

if (isFinite(infinity)) {
    console.log('Aritmatikanya normal'); //berarti bukan infinite
}
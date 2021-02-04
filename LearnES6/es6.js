//

// default parameter values
function getName(firstName, lastName, prefix = "Mr. ") {
    return `${prefix} ${firstName} ${lastName}`
}
console.log(getName("Mihael", "Keehl"));

// .find() & .findIndex() methods
const numbers = [4, 9, 16, 25, 29];
function myFunction(value) {
    return value > 18;
}

// .find() method
const findResult = numbers.find((value) => {
    return value > 8
});
console.log(findResult);

// .findIndex() method
const findIndexResult = numbers.findIndex(myFunction);
console.log(findIndexResult);

// minimum and maximum number
var minInteger = Number.MIN_SAFE_INTEGER;
console.log(minInteger);
var maxInteger = Number.MAX_SAFE_INTEGER;
console.log(maxInteger);

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));
console.log(typeof 10.5);

let number = 5
let stringNumber = "five"
console.log(typeof stringNumber);
stringNumber = Number(stringNumber)
console.log(typeof stringNumber);
console.log(number + stringNumber);

if (isNaN(stringNumber)) {
    console.log("not a number");
}

let infinity = 10 / 0
console.log(infinity);

if (isFinite(infinity)) {
    console.log("yes it is");
}
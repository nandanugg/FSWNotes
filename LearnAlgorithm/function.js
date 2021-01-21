function funtionName(parameter) {
    const process = "this is a process"
    return process
}
let oldName = "Nate";
let newName = oldName;

function addDollarSign(number) {
    const output = `$${number}`;
    return output;
}

console.log("amount is", addDollarSign(200));

function sayHello() {
    console.log('sayHello()', "hello");
}
sayHello()

function combineString(first, second) {
    return `${first}, ${second}`;
}
console.log("combineString()", combineString("hello", "iam here"));

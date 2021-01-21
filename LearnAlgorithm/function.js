function name(params) {
    const process = "this is a process";
    return process;
}

function addDollarSign(number) { //function with parameter, parameter dapat lebih dari 1
    const output = `$${number}`;
    return output;
}

let amount = addDollarSign(300);
console.log('amount:', amount);

function getHello() {
    return 'hellohello'
}
console.log(getHello());

function sayHello() {
    console.log('hello');
}
sayHello()


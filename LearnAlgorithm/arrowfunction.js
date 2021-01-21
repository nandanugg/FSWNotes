// anonymous function
let variablefunction = function (param) {
    return "this is an anonymous function with param of " + param;
}
console.log("variablefunction()", variablefunction("style"));
console.log("variablefunction()", variablefunction);

// arrow function
let variableArrowFunction = (param) => {
    return "this is an arrow function with param of " + param;
}
console.log("variableArrowFunction()", variableArrowFunction("style"));
console.log("variableArrowFunction()", variableArrowFunction);
// if we variable is input with arrow or anonymous function, it will be function


// call back function
// we call this asynchronous
setTimeout(() => // setTimeout(() => {}, 3000) or setTimout(function () {}, 3000), its maybe for delay
{
    console.log("setTimeout()", " this log from setTimeout()")
}, 3000)
// to delay for about miliseconds in 3000 ms -> 3 s
function getMessage() {
    setTimeout(() => {
        return "this is the message from getMessage()"
    }, 3000)
    console.log("inside getMessage()", "getMessage")
}
console.log("outside getMessage()", getMessage());

// call back function
function getMessageWithCallback(callback) { // callback to function
    setTimeout(() => {
        callback("this is the message from getMessage()") // we use here
    }, 3000)
    console.log("inside getMessage()", "getMessage() has completed has completed its task");
}
// call back will call function below here, result will use as console log
getMessageWithCallback((result) => { // arrow function
    console.log("outside getMessageWithCallback()", result);
})
// if we variable is input with arrow or anonymous function, it will be function
// need anonymous function as param
// callback will be function 
// getMessage~ will 
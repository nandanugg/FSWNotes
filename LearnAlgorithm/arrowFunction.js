//Arrow Function merupakan value

//anonymous function
let variableFunction = function () { //function merupakan anonymus function, maka variableFunction akan menjadi function
    return "this is an anonymous function"
}
console.log('variableFunction():', variableFunction());

//arrow Function
let variableArrowFunction = () => {
    return "this is an arrow function"
}
console.log('variableArrowFunction():', variableArrowFunction());

//mendelay output keluar di terminal
setTimeout(() => {
    console.log('setTimeou():', 'this log is from setTimeout()');
}, 3000)

function getMassage() {
    setTimeout(() => {
        return 'the massage from get message';
    }, 3000)
    console.log('inside getMessage():', "get message() has completed ")
}
console.log('outside getMessage()', getMassage()); //undefined

//callback pattern
function getMessageWithCallback(callback) {
    setTimeout(() => {
        callback('the massage from get message')
    }, 3000)
    console.log('inside getMessage():', "get message() has completed ")
}

getMessageWithCallback((result) => {
    console.log('outside getMessageWithCallback()', result);
})

/* memngisi suatu parameter yang merupakan variable dengan fungsi arrow/anonymous
akan menmbuat variable tersebut menjadi sebuat function dengan parameter dari fungsi arrow/anonymous
(jika ada).
Dengan contoh di atas,
    1. parameter dari getMessageWithCallback adalah callback(awalnya sebuah variabel)
    2. variable callback diisi dengan arrow function (result) => {....}
    3. callback menjadi sebuah function yang memiliki parameter result atau dapat ditulis
        callback(result)

function callback dapat berguna memanggil kembali deklarasi statement yang telah didelay, karena membtuhkan waktu
untuk mengekseskusinya.*/
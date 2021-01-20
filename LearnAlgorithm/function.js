function functionName(parameter) {
    const process = "this is a process"
    return process
} //bentukan dasar function

let oldName = "Budi"
let newName = oldName

function addDollarSign(number) {
    const output = `$${number}`
    return output //tulisnya return dulu baru apa yg mau direturn disini variable output yg di return
    //nanti hasil output lah yang dimasukin di output
}

let amount = addDollarSign(200) //amount ini manggil/call function addDollarSign yang sudah dibuat
// 200 dimasukan ke function (number) kemudian dimasukan ke output, dan output tersebut di return ke let
// (200) bisa juga string ("ayam") sesuai yg dimau
console.log("amount:", amount);

//function bisa tidak memakai parameter
function getHello() {
    return 'hello'
}
console.log("getHello():", getHello());
// console.log("getHello():", getHello("apa")); //ini tetap bisa dilakukan tetapi hasilnya tetap hello bukan apa

//function bisa tidak pakai return juga, gaada return atau gaperlu return, langsung panggil function nya
function sayHello() {
    console.log('sayHello():', "hello");
}
sayHello() //langsung function

function combineString(firstString, secondString) {
    return `${firstString} ${secondString}`
}
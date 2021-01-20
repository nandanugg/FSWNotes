//arrowfunction itu bukan function tapi value
//anonymous function dan arrow function bisa diisi param

let variableFunction = function () { //anonymous function atau function tanpa nama yg sifatnya seperti value
    return "this is an anonymous function"
}
console.log('variableFunction():', variableFunction());
//variable apabila diisi dengan anonymous function akan berubah jadi function

//penulisan diatas bisa dipersingkat jadi kaya penulisan dibawah

//arrow function
let variableArrowFunction = () => {
    return "this is an arrow function"
}
console.log('variableArrowFunction():', variableArrowFunction());


//callback menghubungi ketika siap, saat ada atau tidak ada
//setTimeout memiliki 2 parameter, parameter pertama arrow function lalu parameter kedua dilanjutkan pake , setelah }
//setTimeout tugasnya mendelay arrowfunction selama beberapa ms milisecond yang dimasukkan dalam parameter kedua
setTimeout(() => {
    console.log('setTimeout()', 'this log is from ');
}, 3000)

function getMessage() {
    setTimeout(() => {
        return 'This is the message from getMessage()'
    }, 3000)
    console.log('inside getMessage()', "getMessage() has completed it's task");
}
console.log('outside getMessage()', getMessage()); //hasilnya undefined karna callback function ini tidak mau menunggu selama 3000 ms karena synchronus

//untuk menggunakan callback pattern perlu menggunakan anonymous function
//jika variable diisi dengan anonymous function maka variabel tsb berubah jadi function

function getMessageWithCallback(callback) {
    setTimeout(() => {
        callback('This is the message from getMessage()')
    }, 3000)
    console.log('inside getMessageWithCallback()', "getMessage() has completed it's task");
}

getMessageWithCallback((result) => {
    console.log('outside getMessageWithCallback()', result);
})
//getMessageWithCallback ini membuat parameter yg diisi dengan 'callback' dan kemudian dijadikan function karna sifat syncronus dan menggunakan anonymous function
//kemudian parameter callback dapat dipanggil menjadi function yang mana hal ini membuat callback yg dilakukan outside getMessageWithCallback dapat menampilkan hasil dari function callback yang sudah disimpan
//tidak seperti callback awal yg tidak memakai parameter dan function dari parameter tersebut tidak dipanggil juga menyebabkan hasil outside getMessage menjadi undefined
//undefined juga disebabkan oleh callback yg tidak bisa menunggu selama 3000 ms yang membuat callback function langsung melakukan log dari inside getMessage

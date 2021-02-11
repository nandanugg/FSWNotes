// console.log('process started');

// function callback() {
//     setTimeout(() => {
//         console.log('this is the callback result');
//     }, 100);
// }
// callback()
// console.log(`process ended`);

const fs = require('fs')

// // contoh callback
// //cara callback
// fs.readFile('note.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString(), new Date());
//     }
// })

// // cara promise
// fs.promises.readFile('note.txt')
//     .then((data) => {
//         console.log(data.toString(), new Date());
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// cara panjang
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.promises.readFile(fileName)
            .then((data) => {
                resolve(data.toString(), new Date());
            })
            .catch((err) => {
                rejec(err);
            })

    })

}

readFile('iniFile1.txt').then((result) => {
    console.log(result);
})

// cara mudah (hanya berlaku untuk function yang memiliki promise di dalamnya)
// async await disebu "syntatic sugar" menyingkat kodingan diatas jadi dibawah
async function readFile(fileName) {
    const result = await false.promises.readFile(fileName) //buat nunggu hasil promise
    return result.toString()
}

readFile('iniFile.txt')
    .then((result) => {
        console.log(result);
    })

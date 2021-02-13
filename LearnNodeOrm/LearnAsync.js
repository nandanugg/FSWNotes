// synchronous
console.log('log pertama');
console.log('log kedua');
console.log('log ketiga');

// asynchronous
console.log(`process started`, new Date());  // 1

function callback() {
    setTimeout(() => {
        console.log('this is the callback result', new Date()); // 2
    }, 0);
}

callback()

console.log('process ended', new Date); // 3


const { rejects } = require('assert');
// pengenalan fs
const fs = require('fs');
const { resolve } = require('path');

// cara callback
fs.readFile('iniFile.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString(), new Date());
    }
})

// cara promise
fs.promises.readFile('iniFile.txt')
    .then((data) => {
        console.log(data.toString(), new Date());
    })
    .catch((err) => {
        console.log(err);
    })

// cara me return nilai promise
// cara panjang dan ribet
function readFile(fileName) {
    return new promise((resolve, reject) => {
        fs.promises.readFile(fileName)
            .then((data) => {
                resolve(data.toString(), new Date());
            })
            .catch((err) => {
                reject(err);
            })
    })
}

readFile('iniFile.txt')
    .then((result) => {
        console.log(result);
    })


// cara mudah (hanya berlaku untuk fungsi yang menngunakan promise didalamnya)
// async await kata orang adalah "syntastic sugar", artinya kodingan diatas bisa dipersingkat
async function readFile(filename) {
    // callback nggak bisa digunakan di dalam async function, jika iya maka
    // bakal sama aja kyk function biasa, returnnya ke delay
    const result = await fs.promise.readFile(filename) //buat nunggu hasil promise
    return result.toString()
}

readFile('iniFile.txt')
    .then((result) => {
        console.log(result);
    })


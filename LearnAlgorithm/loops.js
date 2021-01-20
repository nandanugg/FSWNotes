//looping itu untuk memproses setiap data yg diterima
let total = 0
const itemPrice = [5000, 6000, 3000]
for (let index = 0; index < itemPrice.length; index++) {
    const item = itemPrice[index]
    console.log("item:", item);
    console.log("index:", index);
    total += item //atau total = total + item disingkat jadi total += item
}
console.log("total:", total);
//total isi awalnya 0 saat loop pertama jadi 5000, isi total saat loop pertama jadi 5000, dst

const isImpostorList = [false, false, true, false]
let loopTimes = 0
while (loopTimes < isImpostorList.length) {
    loopTimes++
    const item = isImpostorList[loopTimes]
    if (item) {
        console.log(`Impostor is found, it's user number ${loopTimes + 1}`); //kenapa loopTimes +1 karena index array mulai dari 0
    }
}

const item = {
    photoUrl: "http://...",
    name: "Sikat gigi siwak",
    sellerName: "Maju Jaya",
    rating: 0,
    harga: 0
}
for (const key in item) {
    console.log("key:", key);
    const value = item[key];
    console.log("value:", value);
    console.log("typeof value:", typeof value);
    if (typeof value = 'number' && value < 1) {
        item[key] = "Tidak ada"
    }
    console.log('\n'); //untuk enter
}//for in loop digunakan untuk looping menampilkan value object dengan valuenya
console.log("item:", item);

const temperatures = [32, 33, 35, 32]
for (const temperature of temperatures) {
    console.log(`The temperature is ${temperature} and its good`);
} //for of digunakan untuk merubah atau menampilkan yg tadinya array jadi satu satu ditampilkannya
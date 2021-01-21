/* Simulasi penggunaan for loop di dunia nyata. Simulasi belanja. */
const itemPrice = [5000, 6000, 3000];
let total = 0;
//loop akan mengulang dari index=0, ke lebih kecil dari itemPrice.length=3, dan bertambah 1 tiap mengulang
for (let index = 0; index < itemPrice.length; index++) {
    const item = itemPrice[index];
    total += item; // total = total + item
    console.log(`itemindex: ${index}, item: ${item}`);
}
console.log(`Total harga: ${total}`);

/* While loop.
While kerap kali digunakan menloop di array hingga syarat salah */

const isImpostorList = [false, false, true, false];
let loopTimes = 0;
//loop akan terus berputar sampai keadaan loopTimes=0 kurang dari isImpostorList.length= 4
while (loopTimes < isImpostorList.length) {
    const item = isImpostorList[loopTimes]
    if (item) {
        console.log(`Impostor was found, it's user number ${loopTimes + 1}`);
    }
    loopTimes++; //loopTimes bertambah satu tiap melewati baris ini
}

//Penggunaan for untuk menerima data
const item = {
    photoUrl: "http://...",
    name: "Giov",
    sellerName: "Ikan Cantik",
    rating: 100, //tidak ada
    harga: 0 //tidak ada
}

//memproses tiap property di dalam item
for (const key in item) {
    console.log('key:', key);
    const value = item[key];
    console.log('value:', value);
    console.log('typeof:', typeof value); //mengecek tipe data dari value
    if (typeof value == 'number' && value == 0) {
        item[key] = "Tidak ada"
    }
}
console.log('\n', item);

const temperatures = [32, 33, 35, 31];
//loop memproses tiap nilai pada array
for (const temperature of temperatures) { //memngambil nilai dari index
    console.log(`The temperature is ${temperature} and it is warm.`);
}
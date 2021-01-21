let total = 0
const itemPrice = [5000, 6000, 3000];
for (let index = 0; index < itemPrice.length; index++) {
    const item = itemPrice[index];
    console.log("item: ", item);
    console.log("index: ", index);
    total += item;
}
console.log("total: ", total);


const impostor = [false, false, true, false];
let looptimes = 0;
while (looptimes < impostor.length) {
    looptimes++;
    const item = impostor[looptimes];
    if (item) {
        console.log(`Impostor is found, its user number ${looptimes + 1}`);
    }
}

const item = {
    photoUrl: "https://www...",
    name: "Toothbrush",
    sellerName: "blackjack",
    rating: 0,
    price: 100
}
for (const key in item) {
    console.log("key:", key);
    const value = item[key];
    console.log("value:", value);
    console.log("typeof value:", typeof value);
    // if (typeof value == 'number') {
    //     item[key] = "tidak ada" // bug indication, will be cost to all numbers //
    // instead use this //
    if (typeof value == 'number' && value < 1) {
        item[key] = "tidak ada"
    }
    console.log("\n")
}
console.log("item:", item);

const temperatures = [32, 33, 35, 32];
for (const temperature of temperatures) {
    console.log(`the temperature is ${temperature}`)
}


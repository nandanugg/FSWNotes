// Bool

let isRaining = true;
let isSunny = false;

if (isRaining) {
    console.log("It's raining today");
} else {
    console.log("It's bright");
}

let boolean = true;
let number = 1;
console.log('Boolean plus number:', boolean, number)

// array

let weatherForecasts = [31, 34, 30, 29];
// try to use index 
console.log('Take first array:', weatherForecasts[0]);

//object

let user = {
    name: "Giov",
    age: "22",
    address: {
        city: "Sleman",
        province: "DIY"
    },
    friends: ['Daffa', 'Suci', "Ma'ruf"]
};
//try to access on of the property in user
console.log('Acces object property:', user.name);
console.log('Acces object property:', user.address.city);
console.log('Acces object property:', user.friends[1]);

// Add new property to user
user.status = "HTS";
console.log('Add new property:', user);
delete user.status;
console.log('Delete property:', user);
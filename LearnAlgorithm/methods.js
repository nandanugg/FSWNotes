//merupakan saudara dari object

let user = {
    name: "Giov",
    age: '21',
    greet() { //method merupakan function didalam objek
        return `Hai, nama saya adalah ${this.name}, saya berumur ${this.age}` //this menandakan function yang berada di dalam suatu object
    }
}

console.log('greet():', user.greet());

//value dalam variable adalah object, shingga memiliki objek
let string = "this is string"
console.log('.toUpperCase():', string.toLocaleUpperCase())

let number = 6.67890
console.log(".toFixed:", number.toFixed(2))

//method pada array
//penggunaan anonymous function

let friends = ['Suci', 'Daffa', 'Winda']
console.log('.join:', friends.join());
console.log('.includes:', friends.includes("Siti"));
console.log('map()', friends.map((friend) => { //fungsi map, memodifikasi di setiap array
    console.log(friend);
    return `${friend} bot`
}));
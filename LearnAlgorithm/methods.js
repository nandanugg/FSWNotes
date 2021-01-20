//method adalah sodara dari property
//method adalah fungsi yg ada di dalam object

let user = {
    name: "Nanda",
    age: 21,
    greet() {
        return `Hai, nama saya adalah ${this.name}, saya berumur ${this.age}`
    } //this merepresentasikan object dimana dia berada yaitu kalo disini object user atau bisa pake nama objectnya jadi user.name dari yg tadinya this.name
} //this dipakai dalam object saja
console.log('.greet()', user.greet());

//method digunakan untuk memodifikasi value dari variabel tersebut, meyimpan banyak fungsi didalam satu objek

let string = "this is string"
console.log(".toUpperCase()", string.toUpperCase()); //untuk uppercase string jadi kapital semua

let number = 6.674
console.log('.toFixed()', number.toFixed(1)); //untuk membuat desimal menjadi berapa angka dibelakang koma seperti yg dimau

let friends = ['Akbar', 'Siti', 'Winda']
console.log(".includes()", friends.includes('Siti')); //boolean untuk liat bener atau tidak
console.log(".map()", friends.map((friend) => { //untuk memodifikasi item disetiap array
    return `${friend} ma bro` //.map butuh return
}));
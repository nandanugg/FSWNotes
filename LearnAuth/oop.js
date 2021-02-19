const obj = {
    firstName: "ALya",
    lastName: "Chaerul"
}

console.log(obj.firstName.firstName);

// belajar oop

// gaya penulisan
class NamaClass {
    // hal yang dibutuhkan untuk membangun class
    constructor(firstName, lastName, createHalfName) {
        this.firstName = firstName
        this.lastName = lastName

        if (createHalfName) {
            this.halfName = firstName.substring(0, 3)
        }

        // this.getFullName = () => {
        //     return `${this.firstName} ${this.lastName}`
        // }
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// cara pakai class
const chania = new NamaClass("Chania", "evangelista")
// cara menggunakan property this di class
console.log(chania.firstName);
console.log(chania.lastName);
console.log(chania.getFullName());
console.log(chania.halfName);


new Date() // mengambil waktu ketika dideklarasikan
// =====================================================
// salah satu konsep dalam OOP
// yaitu inheritence
// cara implementasinya :

// 1. cara biasa
const bapak = {
    emas: true,
    sertifikatRumah: true
}

// pake object spread
const anak = {
    ...bapak,
    hp: true
}

console.log(anak);

// 1. pake oop 
class Bapak {
    constructor(emas, sertifikatRumah) {
        this.emas = emas
        this.sertifikatRumah = sertifikatRumah
    }
}

class Anak extends Bapak {
    constructor(hp, emas, sertifikatRumah) {
        super(emas, sertifikatRumah) // new Bapak()
        this.hp = hp
    }
}

const anakClass = new Anak(false, true, true)
console.log(anakClass.emas);
console.log(anakClass.sertifikatRumah);
console.log(anakClass.hp);
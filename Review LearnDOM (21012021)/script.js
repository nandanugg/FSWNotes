// Bentuk umum : Object.method(elemen/class/id)
// Kode dibawah ini akan menghasilkan HTML collection berbentuk array
const button = document.getElementsByClassName("button")
const button = document.getElementsByClassName('button')[0] 
// [0] karena defaultnya bentuk array jadi harus panggil array ke 1 dengan index 0
const input = document.getElementsByClassName('input')[0]
const h1 = document.getElementsByClassName('header')[0]
const p = document.getElementsByClassName('paragraph')
// Kalau id dapat langsung referensikan element
// id hanya dapat memanggil 1 konten, sedangkan class dapat lebih dari 1
const inputId = document.getElementById('input-id')
const paragraphId = document.getElementById('paragraph-id')
// QuerySelector dapat mengambil salah satu elemen, .class, #id
const buttonQuery = document.querySelector('button') 
// QuerySelectorAll bisa menunjuk semua elemen, .class, #id yang sama
const pQueryAll = document.querySelectorAll('p')

// Setelah memberikan script, terlebih dahulu memeriksa menggunakan console.log
console.log(buttonQuery);

// Bisa dimasukkan anonymous atau arrowFunction
// .onclick adalah listener
button.onclick = () => { 
    console.log('button pressed', input.value, h1.innerHTML); 
    // Input value untuk mengambil input yang dimasukkan user
    // .innerHTML untuk mengambil konten statis
    input.value = "" 
    // Kode diatas digunakan untuk menghilangkan input setelah klik button
    // Atribut menggunakan camelcase (backgroundColor)
    p.style.backgroundColor = "gray" //nge set
    // Jika ditambahkan kodingan yang bawah, maka akan muncul "grey" pada konsol
    console.log(p.style.backgroundColor); //get input
    // Kode dibawah digunakan untuk memberikan perubahan pada seluruh konten dengan elemen p
    for (const element of p) {
        element.style.backgroundColor = "gray"
    }
}

// Author : Faisal-FSW Pagi
// Author : Chania-FSW Pagi
const button = document.getElementsByClassName('button')[0] //kenapa kasih [0] karena defaultnya bentuk array jadi harus panggil array ke 1 dengan index 0
// console.log(button);
const input = document.getElementsByClassName('input')[0]
const h1 = document.getElementsByClassName('heading')[0]
const p = document.getElementsByClassName('paragraph')
const inputId = document.getElementById('input-id') //ambil id
const paragraphId = document.getElementById('paragraph-id') //ambil id
const buttonQuery = document.querySelector('button') //queryselector bisa ambil id atau class
const pQueryAll = document.querySelectorAll('p') //queryselectorall ambil semua elemen yg sama

console.log(buttonQuery);
console.log(pQueryAll);

button.onclick = () => { //.onclick itu listener
    console.log('button pressed', input.value, h1.innerHTML); //input value untuk bisa mengambil input yang dimasukkan
    input.value = "" //bisa juga menghilangkan input
    // p.style.backgroundColor = "gray" //nge set
    // console.log(p.style.backgroundColor); //get input
    for (const element of p) {
        element.style.backgroundColor = "gray"
    }
}
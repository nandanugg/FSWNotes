//  getElementsByClassName berbentuk array maka dari itu tulis index
const button = document.getElementsByClassName('button')[0]
const input = document.getElementsByClassName('input')[0]
const h1 = document.getElementsByClassName('heading')[0]
const p = document.getElementsByClassName('paragraph')
const inputId = document.getElementById('input-id')
const paragraphId = document.getElementById('paragraph-id')
const buttonQuery = document.querySelector('button')
const pQueryAll = document.querySelectorAll('p')
// querySelectorAll digunakan untuk membuat akasi di seluruh selector 
// querySelector digunakan untuk membuat aksi di salah satu selector saja


// masukan anonymous function
button.onclick = () => {
    console.log('Button Presed', input.value, h1.innerHTML);
    // set value 
    // untuk menampilkan yang di isi kedalam js dalam menghapus inputan di dalam HTML
    input.value = ""
    // set css class
    // membuat bacgroud color
    for (const element of p) {
        element.getElementsByClassName.backgroundColor = "gray"
    }

}
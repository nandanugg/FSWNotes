const button = document.getElementsByClassName('button')[0] //
const input = document.getElementsByClassName('input')[0]
const h1 = document.getElementsByClassName('heading')[0]
const p = document.getElementsByClassName('paragraph')//byclass akan membuat suatu array

const inputId = document.getElementById('input-id') //langsung mereference element
const paragraphId = document.getElementById('paragraphId')
const buttonQuery = document.querySelector('.button') // . untuk class dan # untuk id
const pQueryAll = document.querySelectorAll('p')

//getElementsByClassName dapat mereferensi banyak class
//getElementById hanya dapat mereferensi 1 kelas
//buttonQuery dapat memanggil class dan id
console.log(paragraphId);
console.log(pQueryAll);



//declare variable cons sebelum mengambil nilai 

//input.value untuk mengambil nilai dari input
//h1.innerHTML for take value of h1
button.onclick = () => { //listener
    // // console.log('button pressed', input.value, h1.innerHTML);
    // // input.value = ""
    // p.style.backgroundColor = "gray"
    // //backgroundColor merupakan property dari CSS
    // //dituliskan dengan camelCase

    for (const element of p) {
        element.style.backgroundColor = "gray"
    }
    console.log(p.style.backgroundColor);
};

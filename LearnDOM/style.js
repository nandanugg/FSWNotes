const header = document.querySelector('.header')
const paragraph = document.getElementsByClassName('paragraph')
const body = document.querySelector('body')
const button = document.getElementsByClassName('button')
const input = document.getElementsByClassName('input')
const bgColor = document.getElementById('bg-color')
const txtColor = document.getElementById('txt-color')
let kata = document.createElement('p')
kata.textContent = "tempora repellendus magnam"

button[0].onclick = () => {
    paragraph[1].style.backgroundColor = "Black"
    setInterval(() => {
        paragraph[1].style.color = "White"
        paragraph[1].style.fontSize = "30px"
    }, 1000);
}

button[1].onclick = () => {
    header.style.color = "Cyan"
    header.style.backgroundColor = "Green"
    header.style.padding = "3px"
}

button[2].onclick = () => {
    document.body.append(kata)
}

bgColor.addEventListener("change", event => {
    document.body.style.backgroundColor = bgColor.value
})

txtColor.addEventListener("change", event => {
    document.body.style.color = txtColor.value
})
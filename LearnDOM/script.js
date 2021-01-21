const header = document.getElementsByClassName('header')[0]
const paragraph = document.getElementsByClassName('paragraph')
const input = document.getElementById('input-id')
const firstButton = document.getElementById('button-id')
const pQuery = document.querySelector('p')
const pQueryAll = document.querySelectorAll('p')
const inputId = document.querySelector('#input-id')
const buttonClass = document.querySelectorAll('.button')

console.log(buttonClass);

firstButton.onclick = () => {
    console.log('Button Clicked', input.value)
    input.value = ""
    header.style.backgroundColor = "gray"
}
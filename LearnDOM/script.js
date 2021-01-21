console.log("Hello World");
const button = document.getElementsByClassName('button')[0];
const input = document.getElementsByClassName('input')[0];
const h1 = document.getElementsByClassName('heading')[0];
const p = document.getElementsByClassName('paragraph');
const inputId = document.getElementById('input-id');
const paragraphId = document.getElementById('paragraph-id');
const buttonQuery = document.querySelector('.button');
const pQueryAll = document.querySelectorAll('p');

console.log(button);
button.onclick = () => {
    console.log('button pressed');
}

console.log(input);
input.value;
button onclick = () => {
    console.log('button pressed', input.value);
    input.value = ""
}
button.onclick = () => {
    console.log('button pressed', input.value, h1, innerHTML);
    input.value = ""
}

// to change background color in paragraph
button.onclick = () => {
    // option 1
    p.style = "background-color: gray;"
    // option 2
    p.style.backgroundColor = "gray";
    console.log('button pressed', p.style.backgroundColor);
}

// looping in more than 1 <p> tag
button.onclick = () => {
    for (console element of p) {
        element.style.backgroundColor = "grey";
    }
}

// button query can select id and class
console.log(buttonQuery);
console.log(pQueryAll);
button.onclick = () => {
    for (const element of p) {
        element.style.backgroundColor = "grey"
    }
}
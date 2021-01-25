//vanilla js
const commentInput = document.querySelector('#comment-input')
const submitBtn = document.querySelector(".submit-btn") //cara biasa atau vannila.js
const comments = document.querySelector('.comments')
submitBtn.onclick = () => {
    const input = commentInput.value //value mengambil value yang ada di dalam elemen
    const p = document.createElement('p') //create element untuk membuat tag atau elemen baru
    p.innerHTML = input
    comments.appendChild(p) //memberikan "anak" atau element baru
    commentInput.value = ""
}

//jquery
const commentInputJq = $('#comment-input')
const submitBtnJq = $('.submit-btn') //meringkas kode dengan jquery jadi seperti ini
const commentsJq = $('.comments')
submitBtnJq.click(() => {
    const input = commentInputJq.val()
    const p = $('<p></p>') //digunakan seperti createElement tetapi penulisannya seperti ini
    p.html(input) //innerHTML di vanilla js diganti jadi .html saja di jquery
    commentsJq.append(p) //appendChild diganti jadi .append saja di jquery
    commentInputJq.val("") //val digunakan untuk hilangin value dari input yang dimasukan
})
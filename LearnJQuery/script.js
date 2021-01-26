// const kirimBtn = document.querySelector('.kirim-btn')
// const commentInput = document.querySelector('.comment-input')
// const comments = document.querySelector('.comments')
// kirimBtn.onclick = () => {
//     const input = commentInput.value
//     const p = document.createElement('p')
//     p.innerHTML = input
//     comments.appendChild(p)
//     commentInput.value = ""
// }

const kirimBtnJq = $('.kirim-btn')
const commentInputJq = $('.comment-input')
const commentsJq = $('.comments')
kirimBtnJq.click(() => {
    const input = commentInputJq.val()
    const p = $('<p></p>')
    p.html(input)
    commentsJq.append(p)
    commentInputJq.val("")
})
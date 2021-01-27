// //cara vanilla js
// const commentInput = document.querySelector('#comment-input')
// const submitBtn = document.querySelector('.submit-btn')
// const comments = document.querySelector('.comments')

// console.log(submitBtn)
// submitBtn.onclick = () => {
//     const input = commentInput.value
//     const p = document.createElement('p')
//     p.innerHTML = input
//     comments.appendChild(p)
//     commentInput.value = ""
// }

// cara jquery
const commentInputJq = $('#comment-input')
const submitBtnJq = $('.submit-btn')[0] //output array
const commentsJq = $('.comments')
$(submitBtnJq).click(() => {
    const input = commentInputJq.val();
    const p = $('<p></p>')
    p.html(input)
    commentsJq.append(p)
    commentInputJq.val("")

})

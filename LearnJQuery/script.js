// const submitBtn = document.querySelector('.submit-btn')
// const submitBtnJq = $('.submit-btn')
// console.log(submitBtn);
// console.log(submitBtnJq);
// $(submitBtnJq).click(() => {
//     console.log("btn clicked by JQuery");
// })

// vanilla
const commentInput = document.querySelector('#comment-input')
const submitBtn = document.querySelector('.submit-btn')
const comments = document.querySelector('.comments')
submitBtn.onclick = () => {
    const input = commentInput.value
    const p = document.createElement('p')
    p.innerHTML = input
    comments.appendChild(p)
    commentInput.value = ""
}

// jquery
const commentInputJq = $('#comment-input')
const submitBtnJq = $('.submit-btn')
const commentsJq = $('.comments')
submitBtnJq.click(() => {
    const input = commentInputJq.val()
    const p = $('<p></p>')
    // console.log(commentInputJq.val());
    p.html(input)
    commentsJq.append(p)
    commentInputJq.val("")
})

// ini file LearnJquery
//vanila js
const commentInput = document.querySelector('#comment-input')
const submitBtn = document.querySelector('.submit-btn')
const comments = document.querySelector('.comments')
submitBtn.onclick = () => {
    const input = commentInput.value
    const p = document.createElement('p')
    p.innerHTML = input
    comments.appendChild(p)
    // console.log(commentInput.value); diguanakan untuk mengambi value dari commentInput
    commentInput.value = ""
}

//jquery 
const commentInputJq = $('#comment-input')
const submitBtnJq = $('.submit-btn')
const commentsJq = $('comments')
submitBtnJq.click(() => {
    // console.log(commentInputJq.val()); 
    // commentInputJq.val("")
    // code di atas di gunakan untuk memyimpan data dari input , tetapi tidak menampilkannya 

    const input = commentInputJq.val()
    const p = $('<p></p>') // variabel menampilkan paragraf
    p.html(input)
    commentsJq.append(p)  // method append merupakan metode untuk membah
    commentsInputJq.val("")
    // code di atas di gunakan untuk memyimpan data dari input , dan menampilkannya dalam bentuk paragraph 
})
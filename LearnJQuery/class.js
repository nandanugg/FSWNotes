const input = $('.input')
const button = $('.button')
const comments = $('.comments')

button.click(() => {
    const string = input.val()
    const comment = addComment(string)
    comments.append(comment)
})

function addComment(comment) {
    const div = $('<div></div')
    const p = $('<p></p>')
    const button = $('<button></button>')

}

p.html(comment)

button.html("Hapus")
button.click(() => {
    button.parent().remove()
})

div.append(p)
    .append(button)

return div
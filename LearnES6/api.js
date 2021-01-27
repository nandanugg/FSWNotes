const img = document.querySelector('#image')
//mengambil data dari internet dan memunculkannya ke website kita
fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc', {
    headers: {
        'x-api-key': 'b40ac33e-6286-4977-8415-d30b20fb439f'
    }
})
    .then(result => {
        result.json()
            .then(res => {
                const catImg = res[0].url //res[0] mengakses array index 0 dan kemudian mengambil url yang ada dalam array tsb
                img.src = catImg //.src memanggil atau menambahkan hasil dari akses array
            })
    })
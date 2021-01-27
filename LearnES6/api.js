const img = document.querySelector('#image')
fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc', {
    headers: {
        'x-api-key': '1b1c83fe-0f95-4aae-bdcc-4a1f8ac0572a'
    }
})
    .then(result => {
        result.json()
            .then(res => {
                const catImg = res[0].url
                console.log(catImg)
                img.src = catImg
            })
    })
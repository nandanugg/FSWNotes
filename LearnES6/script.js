function getDataFromInternet(cb) {
    setTimeout(() => {
        cb('This is data from internet')
    }, 500);
}

getDataFromInternet((result) => {
    console.log(result);
})

// another way, promise
// need a reason if fulfilled or not
function getDataPromise(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            resolve(url)
        } else {
            reject("nothing url here")
        }
        // // reject('this is error')
        // resolve('this is the data from url ' + url)
    })
}

getDataPromise().then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err);
})
const img = document.querySelector('#image')
fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc', {
    headers: {
        'x-api-key': '9ec43792-01ee-4da0-a018-c71e727746c1'
    }
}).then((result) => {
    result.json().then(res => { // most important
        console.log(res);
        const catImg = res[0].url
        img.src = catImg
        console.log(catImg)
    })
})

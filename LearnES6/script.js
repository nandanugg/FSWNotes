function getDataFromInternet(cb) {
    setTimeout(() => {
        cb('This is the data from internet')
    }, 500)
}
getDataFromInternet(url) {
    console.log(result);
}

function getDataPromise(url) {
    return new Promise((resolve, reject) => {
        // reject('This is error')
        resolve("This is the data from url: " + url)
    })
}
getDataPromise("youtube.com")
    .then(result) => {
    console.log(result);
}
    .catch ((err) => {
    console.error(err);
})

function getDataFromInternet(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            resolve(url) //promise kalo ditepati pake resolve
        } else {
            //menolak janji
            reject('url nya ga ada') // reject(url) //promise kalo ga ditepati pake reject //kalo pake 2 2nya yg awal keluar yg atas
        }
    })
}
getDataFromInternet('youtube.com') //kalo parameternya dihilangin yg muncul reject 'url nya ga ada'
    .then(result => {
        //apapun yg di masukkan di resolve akan keluar disini
        console.log(result);
    })
    .catch(err => {
        //apapun yg di masukkan di resolve akan keluar disini
        console.log(err);
    })
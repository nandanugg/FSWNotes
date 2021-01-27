function getDataFromInternet(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            resolve(url)
        } else {
            reject('Url nya ga ada')
        }
    })
}

getDataFromInternet("youtube.com")
    .then(result => { //then adalah method, yang menjadi keluaran dari promise
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    })
//promise mirip callback, namun callback harus memenuhi tugasnya,
// jika promise dapat menolak atau tidak memenuhi janji.

function getDataFromYoutube(url, cb) {
    cb(url)
}
getDataFromYoutube('youtube.com', (result) => {
    console.log(result);
})
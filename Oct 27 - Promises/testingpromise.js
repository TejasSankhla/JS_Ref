function FetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("data downloading");
        setTimeout(() => {
            let data = "dummy text";
            resolve(data);
            console.log('ending of downloading task');
        }, 2000);
    })
}
function writeFile(value) {
    return new Promise(function (resolve, reject) {
        console.log("data being written ");
        setTimeout(function () {
            console.log("data written sucessfully");
            let file = "resposne.txt"
            resolve(file);
        }, 4000)
    })
}
function UploadToUrl(url, value) {
    return new Promise(function (resolve, reject) {
        console.log("data being uploaded to",url)
        setTimeout(() => {
            console.log(value, " uploadded sucessfully");
            resolve(url);
        }, 4000);
    }
    )

}




let DownlaodedData = FetchData("www.google.com");
DownlaodedData
    .then(function (value) {
        console.log("data downlaoded : ", value);
        return value;
    })
    .then(function (value) {
        return writeFile(value);
    })
    .then(function (value) {
        console.log("data written to file ", value);
        return UploadToUrl("www.yahoo.com", value);
    })
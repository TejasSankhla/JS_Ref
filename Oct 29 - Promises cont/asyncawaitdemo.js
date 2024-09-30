// Tasks:
// 1. Write a function to download data from a url
// 2. Write a function to save that downloaded data in a file and return the filename
// 3. Write a function to upload the file written in previous step to a newurl

function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);//2
        setTimeout(function processDownloading() {// waiting in runtime 1
            let data = "Dummy data";
            console.log("Download completed");//4
            resolve(data);
            // console.log("hello");
            // resolve("sanket");// these lines will not be executed as promise is fulfilled only once
            // resolve(12345);
        }, 7000);
    });
}

function writeFile(data) {
    return new Promise(function (resolve, reject) {
        console.log("Started writing ", data, " in a file");//6
        setTimeout(function processWriting() {
            let filename = "result.txt";
            console.log("File written successfully");//7
            resolve(filename);
        }, 3000);
    });
}

function uploadData(file, url) {
    return new Promise(function (resolve, reject) {
        console.log("Upload started on url", url, "filename is", file);//9
        setTimeout(function processUpload() {
            let result = "SUCCESS";
            console.log("Uploading done");//10
            resolve(result);
        }, 5000);
    });
}


async function processing () {
    let downloadedData = await fetchData("www.google.com");
    console.log("Downloading await completed", downloadedData);//5
    let file = await writeFile(downloadedData);
    console.log("writing await completed", file);//8
    let uploadResponse = await uploadData(file, "www.drive.google.com");
    console.log("uploading await completed");//11
    console.log("Completed process with response: ", uploadResponse);//12

    return true;
}


console.log("Start")//1
processing();
console.log("End");//3
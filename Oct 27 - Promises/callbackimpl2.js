//download data from a url
// save data to a file and return file
// upload the data saved from previous file to a new file

function FetchCustom(url, fn) {
    console.log("fetching data from the ", url);
    setTimeout(function () {
        let data = "dummy text"
        fn(data);
    }, 4000)
}
function WriteFile(data, fn) {
    console.log("data writing starts");
    setTimeout(function () {
        console.log(data, "written sucessfully ");
        let file = "response.txt";
        fn(file);
    }, 4000);
}
function UploadToUrl(url, data,fn) {
    console.log(" uploading ", data, " to ", url);
    setTimeout(() => {
        console.log("data uploaded sucessfully to new url ");
        let response = "success";
        fn(response);
    }, 3000);

}

FetchCustom("www.google.com", function (data) {
    console.log("downlaoding succcessfull  :", data);
    WriteFile(data, function (file) {
        console.log("data written to file : ", file);
        UploadToUrl("www.yahoo.com", file, ( response) => {
            console.log(" uplaod response :", response);
        });
    })
})
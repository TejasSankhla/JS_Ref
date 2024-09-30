function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("Started downloading from", url);//4
        setTimeout(function processDownloading() {// event que 4
            let data = "Dummy data";
            console.log("Download completed");
            resolve(data);
        }, 7000);
    });
}
async function processing() {
    console.log("Entering processing");//3
    let value1 = await fetchData("www.youtube.com");
    console.log("youtube downloading done");
    let value2 = await fetchData("www.google.com");
    console.log("google downloading done");
    console.log("Exiting processing");
    return value1 + value2;
}
console.log("Start");//1
setTimeout(function timer1() { console.log("timer 1") }, 0);// in event que 1
console.log("after setting timer 1");//2
let x = processing();// will generate a pending promise obj untill resolved
console.log("out");//5
x.then(function (value) {// will register the callback function in on fullfillment array for use after resolve
    console.log("finally processing promise resolves with ", value);
});
setTimeout(function timer2() { console.log("timer 2") }, 1000);// event queue 3
setTimeout(function timer3() { console.log("timer 3") }, 0);// event queue 2
console.log("End");//6



// start
//after timer 1
// entering processing
//started downloading form url
//out
//end
//timer 1
//timer 3
//timer 2
//download completed
//youtube downloading done
//started downloading from url
//dwonload completed 
//google doenlaoding completed
//exiting download
//finally processing promise resolves with dummydatadummydata
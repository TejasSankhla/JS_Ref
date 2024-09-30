function dummyPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {//event que 3
            resolve("Timer's promise")
        }, 10000);
    });
}
console.log("Start of the file");//1

setTimeout(function timer1() {//event queue 1
    console.log("Timer 1 done");//4
    let y = dummyPromise();
    y.then(function promiseY(value) {
        console.log("Whose promise ?", value);//6
    });
}, 0);


let x = Promise.resolve("Sanket's promise");// MICRO TASK QUEUE 1
x.then(function processPromise(value) {
    console.log("Whose promise ? ", value);//3
});

setTimeout(function timer2() {//event queue 2
    console.log("Timer 2 done");//5
}, 0);

console.log("End of the file");//2
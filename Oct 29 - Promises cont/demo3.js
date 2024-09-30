// function dummyPromise() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Timer's promise")
//         }, 10000);
//     });
// }
console.log("Start of the file");//1

setTimeout(function timer1() {// eq1
    console.log("Timer 1 done");//4
    let y = Promise.resolve("Immediately promise");
    y.then(function promiseY(value) {//mtq2
        console.log("Whose promise ?", value);//5
    });
}, 0);


let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value) {//mtq1
    console.log("Whose promise ? ", value);//3
});

setTimeout(function timer2() {//eq2
    console.log("Timer 2 done");//6
}, 0);

console.log("End of the file");//2
console.log("Start of the file");//1

setTimeout(function timer1() {
    console.log("Timer 1 done");
}, 0);//4

for(let i = 0; i < 10000000000; i++) {
    // something
}

let x = Promise.resolve("Sanket's promise");
x.then(function processPromise(value) {
    console.log("Whose promise ? ", value);//3
});

setTimeout(function timer2() {
    console.log("Timer 2 done");//5
}, 0);

console.log("End of the file");//2
function process() {
    console.log("Start");// 1
    setTimeout(function exec() {
        console.log("Executed some task1")// 4
    }, 5000);
    setTimeout(function exec() {
        console.log("Executed some task2")// 5
    }, 5000);
    for(let i = 0; i < 100000000; i++) {
        // some task
    }
    console.log("End");// 2
}

process();
console.log("TATA");// 3
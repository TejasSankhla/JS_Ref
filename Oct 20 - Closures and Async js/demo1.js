function todo(task) {
    console.log("Start of todo");// 2
    setTimeout(function fun() {
        console.log("Completed", task);// 5
    }, 5000);
    console.log("End of todo");// 3
}

console.log("Starting"); //1
todo("assignments");
console.log("Ending");// 4
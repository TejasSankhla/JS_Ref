function downloadData(caller){
    return new Promise(function (resolve, reject){
        console.log("Downloading data starts for " + caller);    
        setTimeout(function timer2(){
                    console.log("caller is " + caller);
                    let result = "Success timer2"
                    resolve(result);
            },0);
        console.log("downloading is being processed for " + caller);    
    });
}
function uploadData(caller){
    return new Promise(function (resolve, reject){
        setTimeout(function timer1(){
            let result = "Success timer 1"
            resolve(result);
        },0);
    });
}
async function process1(){
    val1 = await downloadData("process1");
    console.log("val1 in process 1");
    val2 = await uploadData("process1");
    console.log("val2 in process 1");
    return " process1 async completed"
}
async function process2(){
    val1 = await downloadData("process2");
    console.log("val1 in process 2");
    val2 = await uploadData("process2");
    console.log("val2 in process 2");
    return " process2 async completed"
}
console.log("Start main")//1
x = process1()
x.then(function work1(value){
   console.log("from process1 callback ", value)	
});
console.log("middle");//2
y = process2()
y.then(function work2(value){
   console.log("from process2 callback ", value)
})

console.log("end main")//3
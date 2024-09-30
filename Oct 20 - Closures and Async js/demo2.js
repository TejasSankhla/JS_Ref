function todo(task)
{
    console.log("Starting todo");//2
    setTimeout(function fun(){
        console.log("completed",task);//5
    },500);
    task = "dayananda";
    console.log("end of todo");//3
}
console.log("Starting");// 1
todo("assignments");
console.log("Ending");//4
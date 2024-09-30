var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    console.log(teachingAssistant);
    teachingAssistant = "vibhav";
    console.log(teacher);
    console.log(teachingAssistant);
}

console.log(teachingAssistant); //autoglobalization takes place during execution phase
//til the function doesnt executes autoglobal will not be declared 
fun();
console.log(teacher); // sanket

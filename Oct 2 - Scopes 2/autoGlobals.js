var teacher = "Sanket";
function fun() {
    var teacher = "Pulkit";
    console.log(teacher, teachingAssistant);// show error as only target autoglobalization takes place
    teachingAssistant = "vibhav"; // eligible for becoming autoglobal

}

function gun() {
    var student; // scope of gun
    console.log(subject, typeof subject);
    var subject = "JS";
    console.log(teacher, student);
}

console.log(teacher);
gun();
fun()
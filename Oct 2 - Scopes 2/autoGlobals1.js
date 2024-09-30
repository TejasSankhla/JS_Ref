function fun() {
    teachingAssistant = "Vibhav";// global during exectution phase 
    console.log(teachingAssistant);
    var teachingAssistant = "JD";// local during compilation or lexical parsing phase
}

fun();
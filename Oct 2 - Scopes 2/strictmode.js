function fun() {
    ta = "vibhav";
    console.log(ta);
}

function gun() {
    "use strict";// not the first line of code so autoglobalization will take place
    teacher = "sanket";
    console.log(teacher);
}

fun();
gun();
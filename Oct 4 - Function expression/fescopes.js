var x = function gun() {
    console.log("gun");
}

console.log(typeof x);


function fun() {
    var x = 10;
    console.log(typeof x);
    function gun() {
        console.log("inside fun_gun");

    }
    gun()
}
// gun()
x()
fun()
var cases = require("readline-sync");
var userName = cases.question("what is your name?    ");
console.log("welcome ", userName, "Anusha's quiz ...");
var mark = 0;

function play(answer) {
    if (answer < 0) {
        mark = mark + 1
        console.log("you are right and your mark is ", mark)
        console.log(".............")
    } else if (answer % 2 === 0) {
        mark = mark + 1
        console.log("you are right and your mark is ", mark)
        console.log("...............................")
    } else if (answer === " Hyderbad") {
        mark = mark + 1
        console.log("you are right and your mark is ", mark)
        console.log("..................")
    }
}
play(cases.question("Give a negative number :"));
play(cases.question("give a even number : "));
play(cases.question(" capital of Telangana "));
if (mark < 2) {
    Break
} else {
    console.log("Successfully passed level-1")
    console.log("Welcome to level-2")
    console.log(".......................")
    var mark1 = 0;

    function play1(answer1) {
        if (answer1 > 0) {
            mark1 = mark1 + 1
            console.log("you are right and your mark is ", mark1)
            console.log("..........................")

        } else if (answer % 2 === 1) {
            mark1 = mark1 + 1
            console.log("you are right and your mark is ", mark1)
            console.log("..............................")
        } else if (answer === 1947) {
            mark1 = mark1 + 1
            console.log("you are right and your mark is ", mark1)
            console.log("...........................")
        }
    }
    console.log("anusha quiz total score:", mark)
    console.log(userName, "total score :", mark1);

    play1(cases.questionInt("positive number:"));
    play1(cases.question(" Give a odd number :"));
    play1(cases.question(" When India got independence :"));



}
var globalVariable = "Global variable";
function localvariableFunction() {
    var localVariable = "Local variable";
    console.log(localVariable);
}
console.log(localVar); // This will cause an error because localVar is not in the global scope
function scopeErrorFunction() {
    if (true) {
        var blockVar = "I am using var"; // The variable doesn't have block scope
    }
    console.log(blockVar); // Var is not block-scoped
}

scopeErrorFunction();

console.log(blockVar); // The error will be caused due to the fact blockVar is local to the function, not global

function get_Date()
{
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function checkNumber() { // This function will check the number
    var inputValue = document.getElementById("userInput").value;
    var resultMessage = "";
    var number = (inputValue, 10);
    if (number > 10) {
        resultMessage = "The number is greater than 10.";
    } else {
        resultMessage = "The number is 10 or less.";
    }
    document.getElementById("resultMessage").textContent = resultMessage;
}

function Time_function() // This function will display text depending on the number
{
    var Time = new Date().getHours;
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
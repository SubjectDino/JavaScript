var globalVariable = "Global variable";
var localVariable = "Local variable";
function calculatesum(a,b)
{
    3 < 2;
    console.log();
}

function get_Date()
{
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function checkNumber() {
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

function Time_function()
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
// Add
function addition()
{
    var Addition = 3 + 4;
    document.getElementById("Math").innerHTML="3 + 4 = " + Addition;
}

// Subtract
function subtraction()
{
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML="5 - 2 = " + Subtraction;
}

// Multiply
function multiplication()
{
    var Multiplication = 6 * 8;
    document.getElementById("Math").innerHTML="6 x 8 = " + Multiplication;
}

// Divide
function division()
{
    var Division = 48 / 6;
    document.getElementById("Math").innerHTML="48 / 6 = " + Division;
}

// Increment
var E = 5;
E--;
document.write(E);

// Decrement
var F = 5.25;
F--;
document.write(F);

// Math.random function
window.alert(Math.random()*100);
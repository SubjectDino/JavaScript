
// While loop
function countDownWhileLoop(start) {
    let result = "";
    let counter = start;

    // While loop count downs from 0
    while (counter >= 0) {
        result += counter + " ";
        counter--; 
    }

    return result.trim(); 
}

// Function utilizing a for loop
function countDownForLoop(start) {
    let result = "";

    // ForLoop counts down from start value --> 0
    for (let i = start; i >= 0; i--) {
        result += i + " ";
    }

    return result.trim(); // Return the result without trailing spaces
}

// Function utilizing an array
function sumArray(numbers) {
    let sum = 0;

    // Loop through the array to calculate the sum of its elements
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum; // Return the sum of the array elements
}

// Object creation
let person = {
    name: "Nick Cutter",
    age: 36,
    greet: function() {
        return "Hello, my name is " + this.name;
    }
};

// Diesplaying the results
function displayResults() {
    document.getElementById("whileLoopResult").innerText = countDownWhileLoop(10);
    document.getElementById("forLoopResult").innerText = countDownForLoop(10);
    document.getElementById("arrayResult").innerText = sumArray([1, 2, 3, 4, 5]);
    document.getElementById("objectResult").innerText = person.greet();
}
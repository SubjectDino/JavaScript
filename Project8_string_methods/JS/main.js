function concatStrings() {
    var string1 = "Hello, ";
    var string2 = "World!";
    var result = string1.concat(string2);

    document.getElementById("concatResult").textContent = result;
}

function sliceString() {
    var originalString = "JavaScript is awesome!";
    var result = originalString.slice(0, 10);

    document.getElementById("sliceResult").textContent = result;
}

function convertToString() {
    var number = 12345;
    var result = number.toString();

    document.getElementById("toStringResult").textContent = result;
}

function formatPrecision() {
    var number = 123.456789;
    var result = number.toPrecision(4);

    document.getElementById("toPrecisionResult").textContent = result;
}
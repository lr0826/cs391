let one = document.getElementById("one");
let two = document.getElementById("two");
let output = document.getElementById("output");


function doadd(){
    let result = Number(one.value)+Number(two.value);
    output.innerHTML = String(result);
    if (result < 0) output.style.color = "red";
    else output.style.color = "black";
}
function dominus(){
    let result = Number(one.value)-Number(two.value);
    output.innerHTML = String(result);
    if (result < 0) output.style.color = "red";
    else output.style.color = "black";
}
function dodivide(){
    let result = Number(one.value)/Number(two.value);
    output.innerHTML = String(result);
    if (result < 0) output.style.color = "red";
    else output.style.color = "black";
}
function domultiply(){
    let result = Number(one.value)*Number(two.value);
    output.innerHTML = String(result);
    if (result < 0) output.style.color = "red";
    else output.style.color = "black";
}
function dopower(){
    let base = Number(one.value);
    let exp = Number(two.value);
    let result = 1;

    // case 1: exponent is a non-negative integer
    if (exp >= 0 && Number.isInteger(exp)) {
        for (let i = 0; i < exp; i++) {
            result *= base;
        }
    }
    // case 2: exponent is a negative integer
    else if (exp < 0 && Number.isInteger(exp)) {
        let posExp = Math.abs(exp);
        for (let i = 0; i < posExp; i++) {
            result *= base;
        }
        result = 1 / result;   // invert for negative exponent
    }
    // case 3: exponent is fractional
    else {
        // for fractions, loop won’t work correctly
        result = "Exponent must be an integer for this calculator.";
    }

    output.innerHTML = String(result);
    if (typeof result === "number" && result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "black";
    }
}

function clearCalc(){
    one.value = "";
    two.value = "";
    output.innerHTML = "";
}


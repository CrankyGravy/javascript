// Functions
function add7(num) {
  return num + 7;
}

console.log(add7(7));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(7, 7));

function capitalize(myString = undefined) {
  return myString[0].toUpperCase() + myString.slice(1).toLowerCase();
}

console.log(capitalize("hElLO"));

function lastLetter(myInput) {
  return myInput.toString().slice(-1);
}

console.log(lastLetter("Heat"));

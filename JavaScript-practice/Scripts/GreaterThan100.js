// JScriptPractice.js
function promptForNumber(){
let number;
do {
    number = prompt("Please enter a number greater than 100:");
    if (number === null) {
        alert("Prompt cancelled.");
        break;
    }
} while (number <= 100);
}
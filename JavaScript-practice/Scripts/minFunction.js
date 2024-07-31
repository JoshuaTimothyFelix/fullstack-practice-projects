function min(a, b) {
    return a < b ? a : b;
}

document.getElementById('minFunction').addEventListener('click', function(event) {
    event.preventDefault();
    

    const a = parseFloat(prompt("Enter first number:"));
    const b = parseFloat(prompt("Enter second number:"));
    let str = 'Minimum: ' + min(a, b);
    document.getElementById('minOfTwoNumbers').innerHTML = str;
});
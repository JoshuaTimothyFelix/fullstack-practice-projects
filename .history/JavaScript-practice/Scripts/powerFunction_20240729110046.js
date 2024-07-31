document.getElementById('powerFunction').addEventListener('click', function() {
    function pow(x, n) {
        return x ** n;
    }

    const x = parseFloat(prompt("Enter the base number:"));
    const n = parseInt(prompt("Enter the exponent:"), 10);
    document.getElementById('output').textContent = `${x} to the power of ${n} is: ` + pow(x, n);
});
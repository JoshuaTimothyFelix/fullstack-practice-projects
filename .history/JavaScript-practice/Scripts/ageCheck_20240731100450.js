document.getElementById('ageCheck').addEventListener('click', function() {
    function ageCheck(age) {
        if (age >= 18) {
            return true;
        } else {
            return confirm("Did your parents allow you?");
        }
    }

    const age = prompt("Enter your age:");
    const result = ageCheck(age);
    document.getElementById('checkingAge').textContent = 'Age check result: ' + result;
});
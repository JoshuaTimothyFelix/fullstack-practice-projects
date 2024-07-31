function reverseNumberScript() {
    let RNumber = 32243;
    function reverseNumber(num) {
        return parseInt(num.toString().split('').reverse().join(''));
    }
    document.getElementById('reverseNumberOutput').innerText = `Reverse of ${RNumber} is ${reverseNumber(RNumber)}`;
}
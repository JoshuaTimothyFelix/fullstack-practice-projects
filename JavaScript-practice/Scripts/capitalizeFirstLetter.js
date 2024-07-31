function capitalizeFirstLetterScript() {
    function capitalizeFirstLetter(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    let sentence = 'the quick brown fox';
    document.getElementById('capitalizeFirstLetterOutput').innerText = `Modified string is "${capitalizeFirstLetter(sentence)}"`;
}

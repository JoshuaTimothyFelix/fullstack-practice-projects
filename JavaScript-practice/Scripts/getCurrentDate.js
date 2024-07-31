function getCurrentDateScript() {
    let currentDate = new Date();
    document.getElementById('currentDateOutput').innerText = `Current date is: ${currentDate}`;
}
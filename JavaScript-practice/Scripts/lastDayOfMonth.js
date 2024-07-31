document.getElementById('lastDayOfMonth').addEventListener('click', function() {
    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    const year = 2024;
    const month = 6; // July (0-based index
    document.getElementById('output10').innerHTML = 'Last day of the month: ' + getLastDayOfMonth(year, month);
});
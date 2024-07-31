function daysUntilChristmasScript() {
    function daysUntilChristmas() {
        let today = new Date();
        let year = today.getFullYear();
        let christmas = new Date(year, 11, 25); // December 25
        if (today > christmas) {
            christmas.setFullYear(year + 1);
        }
        let oneDay = 24 * 60 * 60 * 1000;
        return Math.ceil((christmas - today) / oneDay);
    }
    document.getElementById('daysUntilChristmasOutput').innerText = `There are ${daysUntilChristmas()} days until Christmas`;
}
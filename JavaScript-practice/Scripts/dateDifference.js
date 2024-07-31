document.getElementById('dateDifference').addEventListener('click', function() {
    function diff_days(dt1, dt2) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((dt2 - dt1) / oneDay));
    }

    const dt1 = new Date("October 13, 2014 08:11:00");
    const dt2 = new Date("October 19, 2014 11:13:00");
    document.getElementById('output16').textContent = 'Difference in days: ' + diff_days(dt1, dt2);
});

document.getElementById('calculateAge').addEventListener('click', function() {
    function calculate_age(dob) {
        const diff_ms = Date.now() - dob.getTime();
        const age_dt = new Date(diff_ms);

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    document.getElementById('output').textContent = 'Age: ' + calculate_age(new Date(1982, 11, 4));
});
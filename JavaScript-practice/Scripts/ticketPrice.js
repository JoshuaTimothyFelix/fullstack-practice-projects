document.getElementById('ticketPrice').addEventListener('click', function() {
    function calculateTicketPrice(age) {
        if (age < 12) {
            return 5;
        } else if (age < 18) {
            return 10;
        } else if (age < 60) {
            return 20;
        } else {
            return 15;
        }
    }

    const age = parseInt(prompt("Enter your age:"), 10);
    document.getElementById('output17').innerHTML = '<h3>Ticket price:</h3>' + calculateTicketPrice(age);
});